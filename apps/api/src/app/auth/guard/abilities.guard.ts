import * as Mustache from 'mustache';
import { User } from '@prisma/client';
import { Reflector } from '@nestjs/core';
import { map, size } from 'lodash';
import { CHECK_ABILITY } from '../decorators/abilities.decorator';
import {
  subject,
  ForbiddenError,
  RawRuleOf,
  createMongoAbility,
} from '@casl/ability';
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { AppAbility, RequiredRule } from '@issp/common';
import { ALLOW_PUBLIC_KEY } from '@issp/api-auth';

@Injectable()
export class AbilitiesGuard implements CanActivate {
  constructor(private reflector: Reflector, private prisma: PrismaService) {}
  createAbility = (rules: RawRuleOf<AppAbility>[]) =>
    createMongoAbility<AppAbility>(rules);

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const allowPublicHandler = this.reflector.get<boolean | undefined>(
      ALLOW_PUBLIC_KEY,
      context.getHandler()
    );
    if (allowPublicHandler) return true;

    const allowPublicClass = this.reflector.get<boolean | undefined>(
      ALLOW_PUBLIC_KEY,
      context.getClass()
    );
    if (allowPublicClass) return true;

    const rules: RequiredRule[] =
      this.reflector.get<RequiredRule[]>(CHECK_ABILITY, context.getHandler()) ||
      [];
    const user: User = context.switchToHttp().getRequest().user;
    const request = context.switchToHttp().getRequest();
    // const permissions = await this.authService.getRolePermissions(user.roleId);

    const permissions = await this.prisma.permission.findMany({
      where: {
        roleId: user.roleId,
      },
    });

    const parsedUserPermissions = this.parseCondition(permissions, user);

    try {
      const ability = this.createAbility(Object(parsedUserPermissions));

      for await (const rule of rules) {
        let sub = {};
        if (size(rule?.conditions)) {
          const subId = +request.params['id'];
          sub = await this.getSubjectById(subId, rule.subject);
        }

        ForbiddenError.from(ability)
          .setMessage('You are not allowed to perform this action')
          .throwUnlessCan(rule.action, subject(rule.subject, sub));
      }
      return true;
    } catch (error) {
      if (error instanceof ForbiddenError) {
        throw new ForbiddenException(error.message);
      }
      throw error;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parseCondition(permissions: any, currentUser: User) {
    const data = map(permissions, (permission) => {
      if (size(permission.conditions)) {
        const parsedVal = Mustache.render(
          permission.conditions['createdBy'],
          currentUser
        );
        return {
          ...permission,
          conditions: { createdBy: +parsedVal },
        };
      }
      return permission;
    });
    return data;
  }

  async getSubjectById(id: number, subName: string) {
    const subject = await this.prisma[subName].findUnique({
      where: {
        id,
      },
    });
    if (!subject) throw new NotFoundException(`${subName} not found`);
    return subject;
  }
}
