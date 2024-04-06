import { ApiProperty } from '@nestjs/swagger';
import { ProjectCategory } from '@prisma/client';

export class ProjectCategoryEntity implements ProjectCategory {
  constructor(projectType: ProjectCategoryEntity) {
    Object.assign(this, projectType);
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
