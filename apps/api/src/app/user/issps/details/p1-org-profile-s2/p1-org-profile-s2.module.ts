import { Module } from '@nestjs/common';
import { P1OrgProfileS2Service } from './p1-org-profile-s2.service';
import { P1OrgProfileS2Controller } from './p1-org-profile-s2.controller';

@Module({
  controllers: [P1OrgProfileS2Controller],
  providers: [P1OrgProfileS2Service],
})
export class P1OrgProfileS2Module {}
