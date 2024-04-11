import { ApiProperty } from '@nestjs/swagger';
import { BudgetType } from '@prisma/client';

export class BudgetTypeEntity implements BudgetType {
  constructor(budgetType: BudgetTypeEntity) {
    Object.assign(this, budgetType);
  }

  @ApiProperty()
  readOnly: boolean;

  @ApiProperty()
  tags: string[];

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
