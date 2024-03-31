import { ApiAuthModule } from '@issp/api-auth';
import { AppCaslFactory } from './casl/casl.factory';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserService } from '../user/user.service';
import { JwtStrategy } from './jwt.strategy';
import { CaslModule } from './casl/casl.module';
// import { ConfigModule, ConfigService } from '../config';
// import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtAuthGuard,
    UserService,
    ConfigService,
    JwtStrategy,
  ],
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: true,
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        // secret: configService.jwtOptions.secret,
        signOptions: { expiresIn: '10000s' },
      }),
    }),
    ApiAuthModule.register(AppCaslFactory),
    ConfigModule,
  ],
  exports: [PassportModule],
})
export class AuthModule {}
