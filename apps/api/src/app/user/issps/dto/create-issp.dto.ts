import { ApiProperty } from '@nestjs/swagger';
import { ISSPScope, ISSPStatus, ISSPSubScope } from '@prisma/client';
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

  @IsEnum(ISSPStatus)
  @IsNotEmpty()
  @ApiProperty()
  status: ISSPStatus;

  @IsEnum(ISSPScope)
  @IsNotEmpty()
  @ApiProperty()
  scope: ISSPScope;

  @IsEnum(ISSPSubScope)
  @ApiProperty()
  subScope: ISSPSubScope;

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

  @IsArray()
  @ApiProperty()
  tags: string[];
}
