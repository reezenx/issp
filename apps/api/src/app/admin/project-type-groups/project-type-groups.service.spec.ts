import { Test, TestingModule } from '@nestjs/testing';
import { ProjectTypeGroupsService } from './project-type-groups.service';

describe('ProjectTypeGroupsService', () => {
  let service: ProjectTypeGroupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectTypeGroupsService],
    }).compile();

    service = module.get<ProjectTypeGroupsService>(ProjectTypeGroupsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
