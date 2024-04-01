import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'nestjs-prisma';
import { CaslFactory, JwtPayload, RequestUser } from '@issp/api-auth';
import { AppAbility } from './casl/casl.factory';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { Token } from './guard/jwt-auth.guard';
import { UserService } from '../user/user.service';
import { environments } from '../environments/environments';
import { UserEntity } from '../admin/users/entities/user.entity';
import { AuthSession } from '@issp/common';
// import { ConfigService } from '../config';
import { JwtStrategy } from './jwt.strategy';
import { ConfigService } from '@nestjs/config';
import { createMongoAbility, RawRuleOf } from '@casl/ability';
// import { JwtStrategy } from './strategies/jwt.strategy';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
    private readonly jwtService: JwtService,
    // private readonly jwtStrategy: JwtStrategy,
    // private readonly config: ConfigService,
    private readonly caslFactory: CaslFactory
  ) {}

  // async getAuthSession(
  //   user: RequestUser,
  //   rememberMe = false
  // ): Promise<AuthSession> {
  //   const jwtPayload: JwtPayload = {
  //     aud: this.config.siteUrl,
  //     sub: user.id,
  //     roles: user.roles,
  //   };

  //   const expiresIn = rememberMe
  //     ? this.config.expiresInRememberMe
  //     : (this.config.jwtOptions.signOptions?.expiresIn as number);

  //   const accessToken = this.jwtService.sign(jwtPayload, { expiresIn });
  //   const refreshToken = this.jwtService.sign(jwtPayload, { expiresIn });

  //   const ability = await this.createAbility(user);

  //   return {
  //     userId: user.id,
  //     roles: user.roles,
  //     rules: ability.rules,
  //     accessToken,
  //     refreshToken,
  //     rememberMe,
  //     expiresIn,
  //   };
  // }

  createAbility = (rules: RawRuleOf<AppAbility>[]) =>
    createMongoAbility<AppAbility>(rules);

  async validate(email: string, password: string) {
    const user = await this.userService.getUserByEmail(email);

    if (!user) {
      throw new UnauthorizedException('User does not exist');
    }

    const isPasswordValid = bcrypt.compare(user.password, password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    return user;
  }

  async login(user: UserEntity, rememberMe = false): Promise<AuthSession> {
    const payload: Token = {
      sub: user.id,
      email: user.email,
    };

    let refreshToken: string;

    if (environments.accessTokenExpiration) {
      refreshToken = await this.jwtService.signAsync(
        payload,
        this.getRefreshTokenOptions(user)
      );
    }

    // const expiresIn = rememberMe
    //   ? this.config.expiresInRememberMe
    //   : (this.config.jwtOptions?.signOptions?.expiresIn as number);
    const expiresIn = 7_776_000;
    // const ability = await this.createAbility(user);
    const permissions = await this.getRolePermissions(user.roleId);
    const ability = this.createAbility(Object(permissions));

    const rules = ability.rules;
    const accessToken = await this.jwtService.signAsync(
      payload,
      this.getAccessTokenOptions(user)
    );
    const roles = user.roles;
    const userId = user.id;

    return {
      accessToken,
      refreshToken,
      roles,
      rules,
      userId,
      expiresIn,
      rememberMe,
    };
  }

  async loginWithRefreshToken(refreshToken: string) {
    try {
      const decoded = this.jwtService.decode(refreshToken) as Token;

      if (!decoded) {
        throw new Error();
      }

      const user = new UserEntity(
        await this.userService.validateUserById(decoded.sub)
      );

      await this.jwtService.verifyAsync<Token>(
        refreshToken,
        this.getRefreshTokenOptions(user)
      );

      return this.login(user);
    } catch {
      throw new UnauthorizedException('Invalid token');
    }
  }

  getRefreshTokenOptions(user: UserEntity): JwtSignOptions {
    return this.getTokenOptions('refresh', user);
  }

  getAccessTokenOptions(user: UserEntity): JwtSignOptions {
    return this.getTokenOptions('access', user);
  }

  private getTokenOptions(type: 'refresh' | 'access', user: UserEntity) {
    const options: JwtSignOptions = {
      secret: environments[type + 'TokenSecret'] + user.sessionToken,
    };

    const expiration = environments[type + 'TokenExpiration'];

    if (expiration) {
      options.expiresIn = expiration;
    }

    return options;
  }

  async getRolePermissions(roleId: string) {
    return await this.prisma.permission.findMany({
      where: {
        roleId,
      },
      select: {
        action: true,
        subject: true,
        conditions: true,
        inverted: true,
        reason: true,
      },
    });
  }

  // async createAbility(user: RequestUser): Promise<AppAbility> {
  //   return this.caslFactory.createAbility(user);
  // }

  // accessibleBy = accessibleBy;

  /**
   * @returns `RequestUser` if valid and `null` otherwise
   */
  // async authorizeJwt(token: string): Promise<RequestUser | null> {
  //   const jwtPayload = this.jwtService.decode(token) as JwtPayload;
  //   return this.jwtStrategy.validate(jwtPayload);
  // }
}
