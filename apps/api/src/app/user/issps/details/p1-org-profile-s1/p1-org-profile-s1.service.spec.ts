import { Test, TestingModule } from '@nestjs/testing';
import { P1OrgProfileS1Service } from './p1-org-profile-s1.service';

describe('P1OrgProfileS1Service', () => {
  let service: P1OrgProfileS1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [P1OrgProfileS1Service],
    }).compile();

    service = module.get<P1OrgProfileS1Service>(P1OrgProfileS1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
