import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsInt, IsNotEmpty, IsString } from 'class-validator';
export class CreateP1OrgProfileS2Dto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  isspId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  b1PlantillaPosition: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  b1OrgUnit: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  b1Email: string;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty()
  b1Contacts: string[];

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  b2OtherSources: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  b3TotalNoEmp: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  b3NoRegionalOffices: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  b3NoProvOffices: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  b3NoOthersOffices: number;
}
