import { ApiProperty } from '@nestjs/swagger';
import { $Enums, Permission, User, UserRole } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class UserEntity implements User {
  constructor(user: UserEntity) {
    Object.assign(this, user);
  }

  @ApiProperty()
  tags: string[];

  @ApiProperty()
  role: $Enums.Role[];

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
  // @ApiProperty()
  // roles?: (Pick<UserRole, 'name'> & {
  //   permissions?: Pick<Permission, 'action' | 'conditions' | 'subject'>;
  // })[];
  @ApiProperty()
  roleId: string;
}
