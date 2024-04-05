import { ApiProperty } from '@nestjs/swagger';
import { Project } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';

export class ProjectEntity implements Project {
  constructor(project: ProjectEntity) {
    Object.assign(this, project);
  }

  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  cost: Decimal;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  unit: string;

  @ApiProperty()
  tags: string[];

  @ApiProperty()
  readOnly: boolean;

  @ApiProperty()
  typeId: string;

  @ApiProperty()
  categoryId: string;

  @ApiProperty()
  implementationTypeId: string;

  @ApiProperty()
  budgetTypeId: string;

  @ApiProperty()
  budgetSourceId: string;

  @ApiProperty()
  agencyId: string;

  @ApiProperty()
  createdBy: string;

  @ApiProperty()
  updatedBy: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
