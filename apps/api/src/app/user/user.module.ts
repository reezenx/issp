import { Module } from '@nestjs/common';

import { IsspsModule } from './issps/issps.module';
import { ActionHistoryModule } from './action-history/action-history.module';

@Module({
  imports: [IsspsModule, ActionHistoryModule],
  exports: [IsspsModule, ActionHistoryModule],
})
export class UserModule {}
