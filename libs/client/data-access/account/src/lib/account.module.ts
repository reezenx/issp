import { Module } from '@nestjs/common';
import { ClientDataAccessAccountService } from './account.service';

@Module({
  controllers: [],
  providers: [ClientDataAccessAccountService],
  exports: [ClientDataAccessAccountService],
})
export class ClientDataAccessAccountModule {}
