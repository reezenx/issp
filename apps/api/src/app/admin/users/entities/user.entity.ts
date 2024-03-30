import { ApiProperty } from '@nestjs/swagger';
import { $Enums, User } from '@prisma/client';
import { Exclude } from 'class-transformer';
import * as bcrypt from 'bcrypt';
import { randomString } from '../../../shared/utils/random-string';

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
}
