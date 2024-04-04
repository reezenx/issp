import { PartialType } from '@nestjs/swagger';
import { CreateBudgetSourceDto } from './create-budget-source.dto';

export class UpdateBudgetSourceDto extends PartialType(CreateBudgetSourceDto) {}
