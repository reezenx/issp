import { Test, TestingModule } from '@nestjs/testing';
import { BudgetResourcesController } from './budget-resources.controller';
import { BudgetResourcesService } from './budget-resources.service';

describe('BudgetResourcesController', () => {
  let controller: BudgetResourcesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BudgetResourcesController],
      providers: [BudgetResourcesService],
    }).compile();

    controller = module.get<BudgetResourcesController>(
      BudgetResourcesController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
