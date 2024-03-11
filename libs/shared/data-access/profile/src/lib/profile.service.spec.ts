import { Test } from '@nestjs/testing';
import { SharedDataAccessProfileService } from './profile.service';

describe('SharedDataAccessProfileService', () => {
  let service: SharedDataAccessProfileService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [SharedDataAccessProfileService],
    }).compile();

    service = module.get(SharedDataAccessProfileService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
