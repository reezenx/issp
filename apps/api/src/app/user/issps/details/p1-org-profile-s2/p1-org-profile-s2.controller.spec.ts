import { Test, TestingModule } from '@nestjs/testing';
import { P1OrgProfileS2Controller } from './p1-org-profile-s2.controller';
import { P1OrgProfileS2Service } from './p1-org-profile-s2.service';

describe('P1OrgProfileS2Controller', () => {
  let controller: P1OrgProfileS2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [P1OrgProfileS2Controller],
      providers: [P1OrgProfileS2Service],
    }).compile();

    controller = module.get<P1OrgProfileS2Controller>(P1OrgProfileS2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
