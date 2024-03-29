import { ApiProperty } from '@nestjs/swagger';
import { Role, UserStatus } from '@prisma/client';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  phone: string;

  @IsEnum(UserStatus)
  @IsNotEmpty()
  @ApiProperty()
  status: UserStatus;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty()
  role: Role[];

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  agencyId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  createdBy: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  updatedBy: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty()
  password: string;
}
