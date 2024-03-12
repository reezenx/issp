import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { CustomPrismaModule } from 'nestjs-prisma';
import { DATA } from '@issp/shared/constant';
import { PrismaClient } from '@issp/prisma/main';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService],
  imports: [
    CustomPrismaModule.forRoot({
      name: DATA.DB.PRISMA_SERVICE_MAIN,
      client: new PrismaClient(),
    }),
  ],
})
export class ArticlesModule {}
