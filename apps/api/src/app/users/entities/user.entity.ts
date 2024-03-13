import { ApiProperty } from '@nestjs/swagger';
import { $Enums, User } from '@prisma/client/main';
import { Exclude } from 'class-transformer';

export class UserEntity implements User {
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
  role: $Enums.Role;
  status: $Enums.User_Status;

  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  agencyId: string;

  @Exclude()
  password: string;
}
