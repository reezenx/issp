import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { CustomPrismaModule } from 'nestjs-prisma';
import { DB } from '@issp/shared/constant';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService],
  imports: [
    CustomPrismaModule.forRoot({
      name: DB.PRISMA_SERVICE_MAIN,
      client: new PrismaClient(),
    }),
  ],
})
export class ArticlesModule {}
