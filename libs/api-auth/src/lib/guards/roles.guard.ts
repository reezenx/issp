import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  mixin,
} from '@nestjs/common';
import { ContextType } from '@nestjs/common/interfaces';
import { Reflector } from '@nestjs/core';
// import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

import { ALLOW_PUBLIC_KEY } from '../decorators/allow-public.decorator';

// import { Role } from '@zen/common';

/**
 * A guard that takes a list of roles for its parameters and checks if the user has at least
 * one of them. Works with either REST controllers or GraphQL resolvers. The following will require the
 * user to have either the `Admin` or `Moderator` roles.
 * ```ts
 * ＠UseGuards(RolesGuard('Admin', 'Moderator'))
 * ```
 * The following will require the user to have both the `Admin` and `Moderator` roles.
 * ```ts
 * ＠UseGuards(RolesGuard('Admin'), RolesGuard('Moderator'))
 * ```
 * If no roles are passed as parameters, it will only verify that the request has a valid JWT
 * and extracts the `RequestUser` to be injected via the `＠CurrentUser` decorator.
 * ```ts
 * ＠UseGuards(RolesGuard())
 * accountInfo(＠CurrentUser() user: RequestUser) { ... }
 * ```
 */
export function RolesGuard<R extends string>(...roles: Array<R>) {
  if (new.target !== undefined)
    throw new Error(
      'RolesGuard cannot be instantiated directly. Use RolesGuard() instead.'
    );

  @Injectable()
  class MixinRolesGuard extends AuthGuard('jwt') {
    constructor(readonly reflector: Reflector) {
      super();
    }

    override async canActivate(context: ExecutionContext) {
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

      let req;
      const type = context.getType() as ContextType | 'graphql';

      if (type === 'http') {
        req = context.switchToHttp().getRequest();
      } else {
        throw new UnauthorizedException(`Context ${type} not supported`);
      }

      //  else if (type === 'graphql') {
      //   req = GqlExecutionContext.create(context).getContext().req;
      // }

      if (!req.user) await super.canActivate(context);

      if (roles.length === 0) return true;

      return rbacLogic(req.user.roles, roles);
    }

    override getRequest(context: ExecutionContext) {
      const type = context.getType() as ContextType | 'graphql';
      if (type === 'http') {
        return context.switchToHttp().getRequest();
      } else {
        throw new UnauthorizedException(`Context ${type} not supported`);
      }

      //  else if (type === 'graphql') {
      //   return GqlExecutionContext.create(context).getContext().req;
      // }
    }
  }

  return mixin(MixinRolesGuard);
}

export function rbacLogic(userRoles: string[], definedRoles: string[]) {
  return (
    userRoles.includes('Super') ||
    definedRoles.some((definedRole) => userRoles.includes(definedRole))
  );
}
