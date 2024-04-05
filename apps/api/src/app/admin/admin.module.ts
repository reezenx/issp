import { ProjectImplTypesModule } from './project-impl-types/project-impl-types.module';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AgenciesModule } from './agencies/agencies.module';
import { CategoriesModule } from './categories/categories.module';
import { ProjectTypesModule } from './project-types/project-types.module';
import { BudgetTypesModule } from './budget-types/budget-types.module';
import { BudgetSourcesModule } from './budget-sources/budget-sources.module';
import { ProjectsModule } from './projects/projects.module';
import { ProjectCategoriesModule } from './project-categories/project-categories.module';

@Module({
  imports: [
    UsersModule,
    AgenciesModule,
    CategoriesModule,
    BudgetTypesModule,
    ProjectTypesModule,
    ProjectCategoriesModule,
    ProjectImplTypesModule,
    BudgetSourcesModule,
    ProjectsModule,
  ],
})
export class AdminModule {}
