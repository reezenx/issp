import { Test, TestingModule } from '@nestjs/testing';
import { BudgetResourcesService } from './budget-resources.service';

describe('BudgetResourcesService', () => {
  let service: BudgetResourcesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BudgetResourcesService],
    }).compile();

    service = module.get<BudgetResourcesService>(BudgetResourcesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
