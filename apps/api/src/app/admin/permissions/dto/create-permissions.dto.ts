import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import {
  IsArray,
  IsBoolean,
  IsJSON,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreatePermissionDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  action: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  subject: string;

  @IsBoolean()
  @ApiProperty()
  inverted: boolean;

  @IsBoolean()
  @ApiProperty()
  readOnly: boolean;

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
