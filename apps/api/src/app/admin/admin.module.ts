import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AgenciesModule } from './agencies/agencies.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [UsersModule, AgenciesModule, CategoriesModule]
})
export class AdminModule {}
