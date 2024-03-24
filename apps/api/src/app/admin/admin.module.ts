import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AgenciesModule } from './agencies/agencies.module';

@Module({
  imports: [UsersModule, AgenciesModule],
})
export class AdminModule {}
