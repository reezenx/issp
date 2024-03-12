import { Test } from '@nestjs/testing';
import { ClientDataAccessAccountService } from './account.service';

describe('ClientDataAccessAccountService', () => {
  let service: ClientDataAccessAccountService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ClientDataAccessAccountService],
    }).compile();

    service = module.get(ClientDataAccessAccountService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
