import { ApiProperty } from '@nestjs/swagger';
import { Project } from '@prisma/client';

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
  cost: number;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  unit: string;

  @ApiProperty()
  tags: string[];

  @ApiProperty()
  readOnly: boolean;

  @ApiProperty()
  isspId: string;

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
