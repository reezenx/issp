import { Test, TestingModule } from '@nestjs/testing';
import { BudgetTypesController } from './budget-types.controller';
import { BudgetTypesService } from './budget-types.service';

describe('BudgetTypesController', () => {
  let controller: BudgetTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BudgetTypesController],
      providers: [BudgetTypesService],
    }).compile();

    controller = module.get<BudgetTypesController>(BudgetTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
