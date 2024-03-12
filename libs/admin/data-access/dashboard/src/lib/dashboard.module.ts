import { Module } from '@nestjs/common';
import { AdminDataAccessDashboardService } from './dashboard.service';

@Module({
  controllers: [],
  providers: [AdminDataAccessDashboardService],
  exports: [AdminDataAccessDashboardService],
})
export class AdminDataAccessDashboardModule {}
