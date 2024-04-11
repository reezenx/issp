import { Test, TestingModule } from '@nestjs/testing';
import { ProjectCategoriesService } from './project-categories.service';

describe('ProjectTypeService', () => {
  let service: ProjectCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectCategoriesService],
    }).compile();

    service = module.get<ProjectCategoriesService>(ProjectCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
