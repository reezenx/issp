import { Test, TestingModule } from '@nestjs/testing';
import { BudgetSourcesService } from './budget-sources.service';

describe('BudgetSourcesService', () => {
  let service: BudgetSourcesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BudgetSourcesService],
    }).compile();

    service = module.get<BudgetSourcesService>(BudgetSourcesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
