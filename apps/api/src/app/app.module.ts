import { DB } from '@issp/common';

import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { CustomPrismaModule, PrismaService } from 'nestjs-prisma';
import { PrismaClient } from '@prisma/client';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CustomPrismaModule.forRoot({
      name: DB.PRISMA_SERVICE_MAIN,
      client: new PrismaClient(),
      isGlobal: true,
    }),
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 10,
      },
    ]),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
