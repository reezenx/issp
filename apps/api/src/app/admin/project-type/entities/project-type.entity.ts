import { ApiProperty } from "@nestjs/swagger";
import { ProjectType } from "@prisma/client";

export class ProjectTypeEntity implements ProjectType {
  constructor(projectType: ProjectTypeEntity){
    Object.assign(this, projectType);
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
