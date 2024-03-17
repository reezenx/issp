import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { CustomPrismaModule } from 'nestjs-prisma';
import { PrismaClient } from '@prisma/client';
import { DB } from '@issp/common';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    CustomPrismaModule.forRoot({
      name: DB.PRISMA_SERVICE_MAIN,
      client: new PrismaClient(),
    }),
  ],
  exports: [UsersService],
})
export class UsersModule {}
