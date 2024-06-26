import { ApiProperty } from '@nestjs/swagger';
import { $Enums, ActionHistory } from '@prisma/client';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateActionHistoryDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  isspId: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  isspVersion: number;

  @IsEnum($Enums.ISSPAction)
  @IsNotEmpty()
  @ApiProperty()
  action: $Enums.ISSPAction;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  changes: string[];

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  parentModule: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  childModule: string;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty()
  tags: string[];

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  createdBy: string;
}
