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

import { ConfigService } from '../config';
import { JwtService } from '../jwt';
import { accessibleBy } from './casl/casl-prisma';
import { AppAbility } from './casl/casl.factory';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AuthSession } from './models/auth-session';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    // private jwtService: JwtService,
    private readonly jwtService: JwtService,
    private readonly jwtStrategy: JwtStrategy,
    private readonly config: ConfigService,
    private readonly caslFactory: CaslFactory
  ) {}

  async login(email: string, password: string): Promise<AuthEntity> {
    // Step 1: Fetch a user with the given email
    const user = await this.prisma.user.findUnique({
      where: { email: email },
    });

    // If no user is found, throw an error
    if (!user) {
      throw new NotFoundException(`No user found for email: ${email}`);
    }

    // Step 2: Check if the password is correct
    const isPasswordValid = bcrypt.compare(user.password, password);

    // If password does not match, throw an error
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    // Step 3: Generate a JWT containing the user's ID and return it
    return {
      accessToken: this.jwtService.sign({ userId: user.id }),
    };
  }

  async getAuthSession(
    user: RequestUser,
    rememberMe = false
  ): Promise<AuthSession> {
    const jwtPayload: JwtPayload = {
      aud: this.config.siteUrl,
      sub: user.id,
      roles: user.roles,
    };

    const expiresIn = rememberMe
      ? this.config.expiresInRememberMe
      : (this.config.jwtOptions.signOptions?.expiresIn as number);

    const token = this.jwtService.sign(jwtPayload, { expiresIn });

    const ability = await this.createAbility(user);

    return {
      userId: user.id,
      roles: user.roles,
      rules: ability.rules,
      token,
      rememberMe,
      expiresIn,
    };
  }

  async createAbility(user: RequestUser): Promise<AppAbility> {
    return this.caslFactory.createAbility(user);
  }

  accessibleBy = accessibleBy;

  /**
   * @returns `RequestUser` if valid and `null` otherwise
   */
  async authorizeJwt(token: string): Promise<RequestUser | null> {
    const jwtPayload = this.jwtService.decode(token) as JwtPayload;
    return this.jwtStrategy.validate(jwtPayload);
  }
}
