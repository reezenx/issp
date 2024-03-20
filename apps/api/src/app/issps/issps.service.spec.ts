import { Test, TestingModule } from '@nestjs/testing';
import { IsspService } from './issps.service';

describe('IsspService', () => {
  let service: IsspService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IsspService],
    }).compile();

    service = module.get<IsspService>(IsspService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
