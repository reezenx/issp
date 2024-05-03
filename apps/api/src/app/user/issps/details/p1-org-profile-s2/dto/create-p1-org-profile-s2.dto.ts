import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateP1OrgProfileS2Dto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  isspId: string;

  @IsString()
  @ApiProperty()
  b1AgencyHeadName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  b1PlannerName: string;

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

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  b1Contacts: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  b2AnnualICTBudget: number;

  @IsString()
  @ApiProperty()
  b2OtherSources: string;

  @IsInt()
  @ApiProperty()
  b3TotalNoEmp: number;

  @IsInt()
  @ApiProperty()
  b3NoRegionalOffices: number;

  @IsInt()
  @ApiProperty()
  b3NoProvOffices: number;

  @IsInt()
  @ApiProperty()
  b3NoOthersOffices: number;
}
