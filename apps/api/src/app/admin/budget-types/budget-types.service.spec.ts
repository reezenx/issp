import { Test, TestingModule } from '@nestjs/testing';
import { BudgetTypesService } from './budget-types.service';

describe('BudgetTypesService', () => {
  let service: BudgetTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BudgetTypesService],
    }).compile();

    service = module.get<BudgetTypesService>(BudgetTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
