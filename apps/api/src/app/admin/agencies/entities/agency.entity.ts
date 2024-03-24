import { ApiProperty } from '@nestjs/swagger';
import { Agency } from '@prisma/client';

export class AgencyEntity implements Agency {
  constructor(agency: AgencyEntity) {
    Object.assign(this, agency);
  }

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
