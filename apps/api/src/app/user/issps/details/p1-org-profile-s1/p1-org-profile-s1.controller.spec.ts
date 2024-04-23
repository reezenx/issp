import { Test, TestingModule } from '@nestjs/testing';
import { P1OrgProfileS1Controller } from './p1-org-profile-s1.controller';
import { P1OrgProfileS1Service } from './p1-org-profile-s1.service';

describe('P1OrgProfileS1Controller', () => {
  let controller: P1OrgProfileS1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [P1OrgProfileS1Controller],
      providers: [P1OrgProfileS1Service],
    }).compile();

    controller = module.get<P1OrgProfileS1Controller>(P1OrgProfileS1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
