import { Test, TestingModule } from '@nestjs/testing';
import { ProjectTypeGroupsController } from './project-type-groups.controller';
import { ProjectTypeGroupsService } from './project-type-groups.service';

describe('ProjectTypeGroupsController', () => {
  let controller: ProjectTypeGroupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectTypeGroupsController],
      providers: [ProjectTypeGroupsService],
    }).compile();

    controller = module.get<ProjectTypeGroupsController>(ProjectTypeGroupsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
