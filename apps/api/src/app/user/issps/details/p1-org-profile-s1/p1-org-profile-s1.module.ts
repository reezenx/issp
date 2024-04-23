import { Module } from '@nestjs/common';
import { P1OrgProfileS1Service } from './p1-org-profile-s1.service';
import { P1OrgProfileS1Controller } from './p1-org-profile-s1.controller';

@Module({
  controllers: [P1OrgProfileS1Controller],
  providers: [P1OrgProfileS1Service],
})
export class P1OrgProfileS1Module {}
