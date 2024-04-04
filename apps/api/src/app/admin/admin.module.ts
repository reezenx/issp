import { ProjectImplTypesModule } from './project-impl-types/project-impl-types.module';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AgenciesModule } from './agencies/agencies.module';
import { CategoriesModule } from './categories/categories.module';
import { ProjectTypeModule } from './project-type/project-type.module';
import { BudgetTypesModule } from './budget-types/budget-types.module';

@Module({
  imports: [
    UsersModule,
    AgenciesModule,
    CategoriesModule,
    BudgetTypesModule,
    ProjectTypeModule,
    ProjectImplTypesModule,
  ],
})
export class AdminModule {}
