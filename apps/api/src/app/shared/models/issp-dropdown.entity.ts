import { ApiProperty } from '@nestjs/swagger';

export class IsspEntityDropdown {
  constructor(item: IsspEntityDropdown) {
    Object.assign(this, item);
  }

  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;
}
