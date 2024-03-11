import { Module } from '@nestjs/common';
import { SharedDataAccessAuthService } from './auth.service';

@Module({
  controllers: [],
  providers: [SharedDataAccessAuthService],
  exports: [SharedDataAccessAuthService],
})
export class SharedDataAccessAuthModule {}
