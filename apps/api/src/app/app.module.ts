import { AdminModule } from './admin/admin.module';
import { ApiAuthModule } from '@issp/api-auth';
import { APP_GUARD } from '@nestjs/core';
import { AppCaslFactory } from './auth/casl/casl.factory';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { ConfigModule } from '@nestjs/config';
import { JwtAuthGuard } from './auth/guard/jwt-auth.guard';
import { JwtService } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { PrismaModule, PrismaService } from 'nestjs-prisma';
import { ThrottlerModule } from '@nestjs/throttler';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { JwtStrategy } from './auth/jwt.strategy';
import { CaslModule } from './auth/casl/casl.module';
import { AbilitiesGuard } from './auth/guard/abilities.guard';
// import { ConfigModule } from './config';

@Module({
  imports: [
    PrismaModule.forRoot({ isGlobal: true }),
    ApiAuthModule.register(AppCaslFactory),
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 10,
      },
    ]),
    AuthModule,
    AdminModule,
    ConfigModule,
    CaslModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    AuthService,
    // ConfigService,
    JwtService,
    JwtStrategy,
    PrismaService,
    UserService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: AbilitiesGuard,
    },
  ],
})
export class AppModule {}
