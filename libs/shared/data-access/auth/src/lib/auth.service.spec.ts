import { Test } from '@nestjs/testing';
import { SharedDataAccessAuthService } from './auth.service';

describe('SharedDataAccessAuthService', () => {
  let service: SharedDataAccessAuthService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [SharedDataAccessAuthService],
    }).compile();

    service = module.get(SharedDataAccessAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
