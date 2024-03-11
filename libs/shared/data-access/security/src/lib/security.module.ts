import { Module } from '@nestjs/common';
import { SharedDataAccessSecurityService } from './security.service';

@Module({
  controllers: [],
  providers: [SharedDataAccessSecurityService],
  exports: [SharedDataAccessSecurityService],
})
export class SharedDataAccessSecurityModule {}
