import { ApiProperty } from '@nestjs/swagger';
import { BudgetSource } from '@prisma/client';

export class BudgetSourceEntity implements BudgetSource {
  constructor(budgetSource: BudgetSourceEntity) {
    Object.assign(this, budgetSource);
  }

  @ApiProperty()
  id: string;

  @ApiProperty()
  code: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  createdBy: string;

  @ApiProperty()
  updatedBy: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
