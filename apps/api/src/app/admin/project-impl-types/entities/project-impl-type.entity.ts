import { ApiProperty } from "@nestjs/swagger";
import { ProjectImplementationType } from "@prisma/client";

export class ProjectImplementationTypeEntity implements ProjectImplementationType {
  constructor(projectImplementationType: ProjectImplementationTypeEntity) {
    Object.assign(this, projectImplementationType);
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
