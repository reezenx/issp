import { ApiProperty } from "@nestjs/swagger";
import { Category } from "@prisma/client";

export class CategoryEntity implements Category {
  constructor(category: CategoryEntity){
    Object.assign(this, category);
  }

  @ApiProperty()
  id: string;

  @ApiProperty()
  code: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  createdBy: string;

  @ApiProperty()
  updatedBy: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
