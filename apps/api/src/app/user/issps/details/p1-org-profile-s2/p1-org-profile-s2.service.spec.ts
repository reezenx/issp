import { Test, TestingModule } from '@nestjs/testing';
import { P1OrgProfileS2Service } from './p1-org-profile-s2.service';

describe('P1OrgProfileS2Service', () => {
  let service: P1OrgProfileS2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [P1OrgProfileS2Service],
    }).compile();

    service = module.get<P1OrgProfileS2Service>(P1OrgProfileS2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
