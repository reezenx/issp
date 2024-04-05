import { Module } from '@nestjs/common';
import { ProjectCategoriesService } from './project-categories.service';
import { ProjectCategoriesController } from './project-categories.controller';

@Module({
  controllers: [ProjectCategoriesController],
  providers: [ProjectCategoriesService],
})
export class ProjectCategoriesModule {}
