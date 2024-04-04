import { PartialType } from '@nestjs/swagger';
import { CreateBudgetResourceDto } from './create-budget-resource.dto';

export class UpdateBudgetResourceDto extends PartialType(
  CreateBudgetResourceDto
) {}
