import { Test, TestingModule } from '@nestjs/testing';
import { BudgetSourcesController } from './budget-sources.controller';
import { BudgetSourcesService } from './budget-sources.service';

describe('BudgetSourcesController', () => {
  let controller: BudgetSourcesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BudgetSourcesController],
      providers: [BudgetSourcesService],
    }).compile();

    controller = module.get<BudgetSourcesController>(BudgetSourcesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
