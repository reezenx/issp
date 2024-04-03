import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProjectTypeDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  code: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  createdBy: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  updatedBy: string;
}
