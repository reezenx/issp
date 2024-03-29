import { Module } from '@nestjs/common';
import { ActionHistoryService } from './action-history.service';
import { ActionHistoryController } from './action-history.controller';

@Module({
  controllers: [ActionHistoryController],
  providers: [ActionHistoryService],
})
export class ActionHistoryModule {}
