import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { CustomPrismaModule } from 'nestjs-prisma';
import { PrismaClient } from '@issp/prisma/main';
import { DATA } from '@issp/shared/constant';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    CustomPrismaModule.forRoot({
      name: DATA.DB.PRISMA_SERVICE_MAIN,
      client: new PrismaClient(),
    }),
  ],
  exports: [UsersService],
})
export class UsersModule {}
