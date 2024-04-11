import { ApiProperty } from '@nestjs/swagger';
import { ProjectTypeGroup } from '@prisma/client';

export class ProjectTypeGroupEntity implements ProjectTypeGroup {
  constructor(projectTypeGroup: ProjectTypeGroupEntity) {
    Object.assign(this, projectTypeGroup);
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
