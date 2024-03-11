import { Test } from '@nestjs/testing';
import { SharedDataAccessSecurityService } from './security.service';

describe('SharedDataAccessSecurityService', () => {
  let service: SharedDataAccessSecurityService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [SharedDataAccessSecurityService],
    }).compile();

    service = module.get(SharedDataAccessSecurityService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
