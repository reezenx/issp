import { PartialType } from '@nestjs/swagger';
import { CreateProjectCategoryDto } from './create-project-category.dto';

export class UpdateProjectTypeDto extends PartialType(
  CreateProjectCategoryDto
) {}
