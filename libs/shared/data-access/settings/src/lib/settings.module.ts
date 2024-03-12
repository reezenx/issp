import { Module } from '@nestjs/common';
import { SharedDataAccessSettingsService } from './settings.service';

@Module({
  controllers: [],
  providers: [SharedDataAccessSettingsService],
  exports: [SharedDataAccessSettingsService],
})
export class SharedDataAccessSettingsModule {}
