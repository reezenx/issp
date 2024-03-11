import { Module } from '@nestjs/common';
import { SharedDataAccessProfileService } from './profile.service';

@Module({
  controllers: [],
  providers: [SharedDataAccessProfileService],
  exports: [SharedDataAccessProfileService],
})
export class SharedDataAccessProfileModule {}
