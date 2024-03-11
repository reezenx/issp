import { Test } from '@nestjs/testing';
import { SharedDataAccessSettingsService } from './settings.service';

describe('SharedDataAccessSettingsService', () => {
  let service: SharedDataAccessSettingsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [SharedDataAccessSettingsService],
    }).compile();

    service = module.get(SharedDataAccessSettingsService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
