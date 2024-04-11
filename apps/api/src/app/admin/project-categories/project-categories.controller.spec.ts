import { Test, TestingModule } from '@nestjs/testing';
import { ProjectCategoriesController } from './project-categories.controller';
import { ProjectCategoriesService } from './project-categories.service';

describe('ProjectTypeController', () => {
  let controller: ProjectCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectCategoriesController],
      providers: [ProjectCategoriesService],
    }).compile();

    controller = module.get<ProjectCategoriesController>(
      ProjectCategoriesController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
