import { ApiProperty } from '@nestjs/swagger';
import { ISSP_Status } from '@prisma/client';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateIsspDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  description: string;

  @IsEnum(ISSP_Status)
  @IsNotEmpty()
  @ApiProperty()
  status: ISSP_Status;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  startYear: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  endYear: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  agencyId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  authorId: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  version: number;

  @IsArray()
  @ApiProperty()
  tags: string[];

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  createdBy: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  updatedBy: string;
}
