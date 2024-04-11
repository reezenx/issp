import { PartialType } from '@nestjs/swagger';
import { CreateProjectTypeGroupDto } from './create-project-type-group.dto';

export class UpdateProjectTypeGroupDto extends PartialType(CreateProjectTypeGroupDto) {}
