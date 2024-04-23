import { PartialType } from '@nestjs/swagger';
import { CreateP1OrgProfileS1Dto } from './create-p1-org-profile-s1.dto';

export class UpdateP1OrgProfileS1Dto extends PartialType(
  CreateP1OrgProfileS1Dto
) {}
