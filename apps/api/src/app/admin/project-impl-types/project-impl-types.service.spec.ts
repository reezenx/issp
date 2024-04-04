import { Test, TestingModule } from '@nestjs/testing';
import { ProjectImplTypesService } from './project-impl-types.service';

describe('ProjectImplTypesService', () => {
  let service: ProjectImplTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectImplTypesService],
    }).compile();

    service = module.get<ProjectImplTypesService>(ProjectImplTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
