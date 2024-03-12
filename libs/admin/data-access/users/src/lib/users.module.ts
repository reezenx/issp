import { Module } from '@nestjs/common';
import { AdminDataAccessUsersService } from './users.service';

@Module({
  controllers: [],
  providers: [AdminDataAccessUsersService],
  exports: [AdminDataAccessUsersService],
})
export class AdminDataAccessUsersModule {}
