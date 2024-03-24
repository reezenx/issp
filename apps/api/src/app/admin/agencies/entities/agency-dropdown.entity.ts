import { ApiProperty } from '@nestjs/swagger';

export class AgencyEntityDropdown {
  constructor(item: AgencyEntityDropdown) {
    Object.assign(this, item);
  }

  @ApiProperty()
  id: string;

  @ApiProperty()
  code: string;

  @ApiProperty()
  name: string;
}
