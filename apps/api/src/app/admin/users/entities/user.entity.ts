import { ApiProperty } from '@nestjs/swagger';
import { $Enums, User, UserRole } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class UserEntity implements User {
  constructor(user: UserEntity) {
    Object.assign(this, user);
  }
  @ApiProperty()
  readOnly: boolean;

  @ApiProperty()
  tags: string[];

  @ApiProperty()
  status: $Enums.UserStatus;

  @ApiProperty()
  id: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

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
  agencyId: string;

  @ApiProperty()
  sessionToken: string;

  @Exclude()
  password: string;

  @ApiProperty()
  roles?: Pick<UserRole, 'name'>[];

  @ApiProperty()
  roleId: string;
}
