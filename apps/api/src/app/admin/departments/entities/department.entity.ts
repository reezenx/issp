import { ApiProperty } from '@nestjs/swagger';
import { Department, Status } from '@prisma/client';


export class DepartmentEntity implements Department {
  constructor(department: DepartmentEntity) {
    Object.assign(this, department);
  }

  @ApiProperty()
  status: Status;

  @ApiProperty()
  uacs: string;

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
