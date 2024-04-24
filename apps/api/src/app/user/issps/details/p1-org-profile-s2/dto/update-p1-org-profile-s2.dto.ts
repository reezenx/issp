import { PartialType } from '@nestjs/swagger';
import { CreateP1OrgProfileS2Dto } from './create-p1-org-profile-s2.dto';

export class UpdateP1OrgProfileS2Dto extends PartialType(
  CreateP1OrgProfileS2Dto
) {}
