import { ApiProperty } from '@nestjs/swagger';
import { $Enums, ISSP } from '@prisma/client';

export class IsspEntity implements ISSP {
  constructor(issp: IsspEntity) {
    Object.assign(this, issp);
  }

  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  status: $Enums.ISSP_Status;

  @ApiProperty()
  yearStart: string;

  @ApiProperty()
  yearEnd: string;

  @ApiProperty()
  tags: string[];

  @ApiProperty()
  agencyId: string;

  @ApiProperty()
  authorId: string;

  @ApiProperty()
  version: number;

  @ApiProperty()
  createdBy: string;

  @ApiProperty()
  updatedBy: string;

  @ApiProperty()
  updatedAt: Date;
}
