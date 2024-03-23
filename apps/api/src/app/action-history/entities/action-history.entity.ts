import { ApiProperty } from '@nestjs/swagger';
import { $Enums, Action_History } from '@prisma/client';

export class ActionHistoryEntity implements Action_History {
  constructor(actionHistory: Action_History) {
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
  action: $Enums.ISSP_Action;

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
