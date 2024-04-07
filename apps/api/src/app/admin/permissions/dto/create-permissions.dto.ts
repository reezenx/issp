import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import {
  IsArray,
  IsBoolean,
  IsJSON,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreatePermissionDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  roleId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  action: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  subject: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty()
  inverted: boolean;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty()
  readonly: boolean;

  @IsString()
  @ApiProperty()
  reason: string;

  @IsArray()
  @ApiProperty()
  tags: string[];

  @IsJSON()
  @ApiProperty()
  conditions: Prisma.JsonValue;
}
