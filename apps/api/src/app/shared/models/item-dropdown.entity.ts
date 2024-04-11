import { ApiProperty } from '@nestjs/swagger';

export class ItemEntityDropdown {
  constructor(item: ItemEntityDropdown) {
    Object.assign(this, item);
  }

  @ApiProperty()
  id: string;

  @ApiProperty()
  code?: string;

  @ApiProperty()
  name: string;
}
