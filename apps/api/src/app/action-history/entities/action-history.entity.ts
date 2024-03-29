import { ApiProperty } from '@nestjs/swagger';
import { $Enums, ActionHistory } from '@prisma/client';

export class ActionHistoryEntity implements ActionHistory {
  constructor(actionHistory: ActionHistory) {
    Object.assign(this, actionHistory);
  }

  @ApiProperty()
  id: string;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  isspId: string;

  @ApiProperty()
  isspVersion: number;

  @ApiProperty()
  action: $Enums.ISSPAction;

  @ApiProperty()
  changes: string[];

  @ApiProperty()
  parentModule: string;

  @ApiProperty()
  childModule: string;

  @ApiProperty()
  tags: string[];

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  createdBy: string;
}
