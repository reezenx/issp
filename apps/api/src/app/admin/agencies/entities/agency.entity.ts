import { ApiProperty } from '@nestjs/swagger';
import { Agency, Status } from '@prisma/client';

export class AgencyEntity implements Agency {
  constructor(agency: AgencyEntity) {
    Object.assign(this, agency);
  }

  @ApiProperty()
  readOnly: boolean;

  @ApiProperty()
  status: Status;

  @ApiProperty()
  departmentId: string;

  @ApiProperty()
  id: string;

  @ApiProperty()
  code: string;

  @ApiProperty()
  categoryId: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  uacs: string;

  @ApiProperty()
  createdBy: string;

  @ApiProperty()
  updatedBy: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  tags: string[];
}
