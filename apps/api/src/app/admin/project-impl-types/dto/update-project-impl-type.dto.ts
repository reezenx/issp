import { PartialType } from '@nestjs/swagger';
import { CreateProjectImplTypeDto } from './create-project-impl-type.dto';

export class UpdateProjectImplTypeDto extends PartialType(
  CreateProjectImplTypeDto
) {}
