import { Module } from '@nestjs/common';
import { AdminDataAccessProjectsService } from './projects.service';

@Module({
  controllers: [],
  providers: [AdminDataAccessProjectsService],
  exports: [AdminDataAccessProjectsService],
})
export class AdminDataAccessProjectsModule {}
