import { Test, TestingModule } from '@nestjs/testing';
import { ActionHistoryController } from './action-history.controller';
import { ActionHistoryService } from './action-history.service';

describe('ActionHistoryController', () => {
  let controller: ActionHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActionHistoryController],
      providers: [ActionHistoryService],
    }).compile();

    controller = module.get<ActionHistoryController>(ActionHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
