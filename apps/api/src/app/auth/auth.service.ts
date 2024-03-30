import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
import { AuthEntity } from './entity/auth.entity';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'nestjs-prisma';

import { CaslFactory, JwtPayload, RequestUser } from '@issp/api-auth';

import { accessibleBy } from './casl/casl-prisma';
import { AppAbility } from './casl/casl.factory';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AuthSession } from './models/auth-session';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { Token } from './guard/jwt-auth.guard';
import { UserService } from './services/user.service';
import { environments } from '../environments/environments';
import { UserEntity } from '../admin/users/entities/user.entity';
import { ConfigService } from '../config';

export interface TokenResponse {
  accessToken: string;
  refreshToken: string;
}

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
    // private jwtService: JwtService,
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

  //   const token = this.jwtService.sign(jwtPayload, { expiresIn });

  //   const ability = await this.createAbility(user);

  //   return {
  //     userId: user.id,
  //     roles: user.roles,
  //     rules: ability.rules,
  //     token,
  //     rememberMe,
  //     expiresIn,
  //   };
  // }

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

  async login(user: UserEntity): Promise<TokenResponse> {
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

    return {
      accessToken: await this.jwtService.signAsync(
        payload,
        this.getAccessTokenOptions(user)
      ),
      refreshToken,
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

  //   const token = this.jwtService.sign(jwtPayload, { expiresIn });

  //   const ability = await this.createAbility(user);

  //   return {
  //     userId: user.id,
  //     roles: user.roles,
  //     rules: ability.rules,
  //     token,
  //     rememberMe,
  //     expiresIn,
  //   };
  // }

  async createAbility(user: RequestUser): Promise<AppAbility> {
    return this.caslFactory.createAbility(user);
  }

  accessibleBy = accessibleBy;

  /**
   * @returns `RequestUser` if valid and `null` otherwise
   */
  // async authorizeJwt(token: string): Promise<RequestUser | null> {
  //   const jwtPayload = this.jwtService.decode(token) as JwtPayload;
  //   return this.jwtStrategy.validate(jwtPayload);
  // }
}
