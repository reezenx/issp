import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateP1OrgProfileS1Dto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  a1MandateLegal: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  a1MandateFunctions: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  a2Vision: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  a3Mission: string;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty()
  a4FinalOutputs: string[];
}
