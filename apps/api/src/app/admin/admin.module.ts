import { Module } from '@nestjs/common';

import { AgenciesModule } from './agencies/agencies.module';
import { BudgetSourcesModule } from './budget-sources/budget-sources.module';
import { BudgetTypesModule } from './budget-types/budget-types.module';
import { CategoriesModule } from './categories/categories.module';
import { DepartmentsModule } from './departments/departments.module';
import { PermissionsModule } from './permissions/permissions.module';
import { ProjectCategoriesModule } from './project-categories/project-categories.module';
import { ProjectImplTypesModule } from './project-impl-types/project-impl-types.module';
import { ProjectsModule } from './projects/projects.module';
import { ProjectTypesModule } from './project-types/project-types.module';
import { UserRolesModule } from './user-roles/user-roles.module';
import { UsersModule } from './users/users.module';
import { ProjectTypeGroupsModule } from './project-type-groups/project-type-groups.module';

@Module({
  imports: [
    AgenciesModule,
    BudgetSourcesModule,
    BudgetTypesModule,
    CategoriesModule,
    DepartmentsModule,
    PermissionsModule,
    ProjectCategoriesModule,
    ProjectImplTypesModule,
    ProjectsModule,
    ProjectTypesModule,
    UserRolesModule,
    UsersModule,
    ProjectTypeGroupsModule,
  ],
})
export class AdminModule {}
