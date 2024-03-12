import { Test } from '@nestjs/testing';
import { AdminDataAccessUsersService } from './users.service';

describe('AdminDataAccessUsersService', () => {
  let service: AdminDataAccessUsersService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [AdminDataAccessUsersService],
    }).compile();

    service = module.get(AdminDataAccessUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
