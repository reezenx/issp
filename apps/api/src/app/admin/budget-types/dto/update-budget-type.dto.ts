import { PartialType } from '@nestjs/swagger';
import { CreateBudgetTypeDto } from './create-budget-type.dto';

export class UpdateBudgetTypeDto extends PartialType(CreateBudgetTypeDto) {}
