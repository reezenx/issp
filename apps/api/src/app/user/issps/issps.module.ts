import { Module } from '@nestjs/common';
import { IsspService } from './issps.service';
import { IsspController } from './issps.controller';
import { P1OrgProfileS1Module } from './details/p1-org-profile-s1/p1-org-profile-s1.module';
import { P1OrgProfileS2Module } from './details/p1-org-profile-s2/p1-org-profile-s2.module';

@Module({
  controllers: [IsspController],
  providers: [IsspService],
  imports: [P1OrgProfileS1Module, P1OrgProfileS2Module],
})
export class IsspsModule {}
