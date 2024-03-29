import { PartialType } from '@nestjs/swagger';
import { CreateActionHistoryDto } from './create-action-history.dto';

export class UpdateActionHistoryDto extends PartialType(
  CreateActionHistoryDto
) {}
