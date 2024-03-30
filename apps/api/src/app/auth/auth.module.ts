import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
// import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../admin/users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppCaslFactory } from './casl/casl.factory';
import { ApiAuthModule } from '@issp/api-auth';
import { JwtStrategy } from './strategies/jwt.strategy';
import { UserService } from './services/user.service';
import { JwtAuthGuard } from './guard/jwt-auth.guard';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtAuthGuard, UserService, ConfigService],
  // JwtAuthGuard,
  // AuthService,
  // JwtStrategy,
  // UserService,
  // ConfigService,
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: '10000s' },
      }),
    }),
    ApiAuthModule.register(AppCaslFactory),
    UsersModule,
    ConfigModule,
  ],
  exports: [
    PassportModule,
    JwtAuthGuard,
    AuthService,
    JwtModule,
    ConfigModule,
    // UserModule,
  ],
})
export class AuthModule {}
