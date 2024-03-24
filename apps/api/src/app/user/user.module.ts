import { Module } from '@nestjs/common';

import { IsspsModule } from './issps/issps.module';

@Module({
  imports: [IsspsModule],
  exports: [IsspsModule],
})
export class UserModule {}
