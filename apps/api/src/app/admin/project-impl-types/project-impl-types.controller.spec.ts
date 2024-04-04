import { Test, TestingModule } from '@nestjs/testing';
import { ProjectImplTypesController } from './project-impl-types.controller';
import { ProjectImplTypesService } from './project-impl-types.service';

describe('ProjectImplTypesController', () => {
  let controller: ProjectImplTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectImplTypesController],
      providers: [ProjectImplTypesService],
    }).compile();

    controller = module.get<ProjectImplTypesController>(
      ProjectImplTypesController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
