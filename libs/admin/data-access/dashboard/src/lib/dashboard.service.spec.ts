import { Test } from '@nestjs/testing';
import { AdminDataAccessDashboardService } from './dashboard.service';

describe('AdminDataAccessDashboardService', () => {
  let service: AdminDataAccessDashboardService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [AdminDataAccessDashboardService],
    }).compile();

    service = module.get(AdminDataAccessDashboardService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
