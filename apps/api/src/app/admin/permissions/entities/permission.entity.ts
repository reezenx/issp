import { ApiProperty } from '@nestjs/swagger';
import { Permission, Prisma } from '@prisma/client';

export class PermissionEntity implements Permission {
  constructor(permission: PermissionEntity) {
    Object.assign(this, permission);
  }

  @ApiProperty()
  id: string;

  @ApiProperty()
  roleId: string;

  @ApiProperty()
  action: string;

  @ApiProperty()
  subject: string;

  @ApiProperty()
  inverted: boolean;

  @ApiProperty()
  conditions: Prisma.JsonValue;

  @ApiProperty()
  reason: string;

  @ApiProperty()
  readOnly: boolean;

  @ApiProperty()
  tags: string[];

  @ApiProperty()
  createdBy: string;

  @ApiProperty()
  updatedBy: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
