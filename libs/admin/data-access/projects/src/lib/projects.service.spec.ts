import { Test } from '@nestjs/testing';
import { AdminDataAccessProjectsService } from './projects.service';

describe('AdminDataAccessProjectsService', () => {
  let service: AdminDataAccessProjectsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [AdminDataAccessProjectsService],
    }).compile();

    service = module.get(AdminDataAccessProjectsService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
