import { ApiProperty } from '@nestjs/swagger';
import { BudgetSource } from '@prisma/client';

export class BudgetResourceEntity implements BudgetSource {
  constructor(budgetResource: BudgetResourceEntity) {
    Object.assign(this, budgetResource);
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
