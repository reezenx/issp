import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '@prisma/client';

export class UserRoleEntity implements UserRole {
  constructor(user: UserRoleEntity) {
    Object.assign(this, user);
  }

  @ApiProperty()
  id: string;

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
