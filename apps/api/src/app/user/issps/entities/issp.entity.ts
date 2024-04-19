import { ApiProperty } from '@nestjs/swagger';
import { $Enums, ISSP } from '@prisma/client';

export class IsspEntity implements ISSP {
  constructor(issp: IsspEntity) {
    Object.assign(this, issp);
  }

  @ApiProperty()
  p1OrgProfileS1Id: string;

  @ApiProperty()
  p1OrgProfileS2Id: string;

  @ApiProperty()
  readOnly: boolean;

  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  status: $Enums.ISSPStatus;

  @ApiProperty()
  startYear: number;

  @ApiProperty()
  endYear: number;

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
