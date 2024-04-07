import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MaterialModule,
  SyncfusionGridModule,
} from '@issp/common/ui/libraries';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { MatNativeDateModule } from '@angular/material/core';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { AdminRoutes } from './admin.routes';
import { AgenciesAdminComponent } from './agencies/agencies-admin/agencies-admin.component';
import { AgenciesAdminShellComponent } from './agencies/agencies-admin-shell/agencies-admin-shell.component';
import { AgencyAdminEditComponent } from './agencies/agency-admin-edit/agency-admin-edit.component';
import { AgencyAdminNewComponent } from './agencies/agency-admin-new/agency-admin-new.component';
import { BudgetSourcesAdminComponent } from './budget-sources/budget-sources-admin/budget-sources-admin.component';
import { BudgetSourcesAdminEditComponent } from './budget-sources/budget-sources-admin-edit/budget-sources-admin-edit.component';
import { BudgetSourcesAdminNewComponent } from './budget-sources/budget-sources-admin-new/budget-sources-admin-new.component';
import { BudgetSourcesAdminShellComponent } from './budget-sources/budget-sources-admin-shell/budget-sources-admin-shell.component';
import { BudgetTypesAdminComponent } from './budget-types/budget-types-admin/budget-types-admin.component';
import { BudgetTypesAdminEditComponent } from './budget-types/budget-types-admin-edit/budget-types-admin-edit.component';
import { BudgetTypesAdminNewComponent } from './budget-types/budget-types-admin-new/budget-types-admin-new.component';
import { BudgetTypesAdminShellComponent } from './budget-types/budget-types-admin-shell/budget-types-admin-shell.component';
import { CategoriesAdminComponent } from './categories/categories-admin/categories-admin.component';
import { CategoriesAdminShellComponent } from './categories/categories-admin-shell/categories-admin-shell.component';
import { CategoryAdminEditComponent } from './categories/category-admin-edit/category-admin-edit.component';
import { CategoryAdminNewComponent } from './categories/category-admin-new/category-admin-new.component';
import { ControlsModule, PivotTableComponent } from '@issp/components';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PipesModule } from '@issp/common';
import { PivotTableAdvComponent } from './pivot-table/pivot-table.component';
import { ProjectImplTypeAdminEditComponent } from './project-impl-types/project-impl-type-admin-edit/project-impl-type-admin-edit.component';
import { ProjectImplTypeAdminNewComponent } from './project-impl-types/project-impl-type-admin-new/project-impl-type-admin-new.component';
import { ProjectImplTypesAdminComponent } from './project-impl-types/project-impl-types-admin/project-impl-types-admin.component';
import { ProjectImplTypesAdminShellComponent } from './project-impl-types/project-impl-types-admin-shell/project-impl-types-admin-shell.component';
import { ProjectsAdminComponent } from './projects/projects-admin/projects-admin.component';
import { ProjectsAdminEditComponent } from './projects/projects-admin-edit/projects-admin-edit.component';
import { ProjectsAdminNewComponent } from './projects/projects-admin-new/projects-admin-new.component';
import { ProjectsAdminShellComponent } from './projects/projects-admin-shell/projects-admin-shell.component';
import { UserAdminEditComponent } from './users/user-admin-edit/user-admin-edit.component';
import { UserAdminNewComponent } from './users/user-admin-new/user-admin-new.component';
import { UsersAdminComponent } from './users/users-admin/users-admin.component';
import { UsersAdminShellComponent } from './users/users-admin-shell/users-admin-shell.component';
import { DepartmentsAdminComponent } from './departments/departments-admin/departments-admin.component';
import { DepartmentsAdminShellComponent } from './departments/departments-admin-shell/departments-admin-shell.component';
import { DepartmentAdminNewComponent } from './departments/department-admin-new/department-admin-new.component';
import { DepartmentsAdminEditComponent } from './departments/departments-admin-edit/departments-admin-edit.component';
import { ProjectCategoriesAdminShellComponent } from './project-categories/project-categories-admin-shell/project-categories-admin-shell.component';
import { ProjectCategoriesAdminComponent } from './project-categories/project-categories-admin/project-categories-admin.component';
import { ProjectCategoryAdminEditComponent } from './project-categories/project-category-admin-edit/project-category-admin-edit.component';
import { ProjectCategoryAdminNewComponent } from './project-categories/project-category-admin-new/project-category-admin-new.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    MaterialModule,
    SyncfusionGridModule,
    PipesModule,
    FormsModule,
    ControlsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
    AngularEditorModule,
    PivotTableComponent,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    MatNativeDateModule,
    NgScrollbarModule,
    DashboardComponent,
  ],
  declarations: [
    AgenciesAdminComponent,
    AgenciesAdminShellComponent,
    AgencyAdminEditComponent,
    AgencyAdminNewComponent,
    BudgetSourcesAdminComponent,
    BudgetSourcesAdminEditComponent,
    BudgetSourcesAdminNewComponent,
    BudgetSourcesAdminShellComponent,
    BudgetTypesAdminComponent,
    BudgetTypesAdminEditComponent,
    BudgetTypesAdminNewComponent,
    BudgetTypesAdminShellComponent,
    CategoriesAdminComponent,
    CategoriesAdminShellComponent,
    CategoryAdminEditComponent,
    CategoryAdminNewComponent,
    PivotTableAdvComponent,
    ProjectImplTypeAdminEditComponent,
    ProjectImplTypeAdminNewComponent,
    ProjectImplTypesAdminComponent,
    ProjectImplTypesAdminShellComponent,
    ProjectsAdminComponent,
    ProjectsAdminEditComponent,
    ProjectsAdminNewComponent,
    ProjectsAdminShellComponent,
    UserAdminEditComponent,
    UserAdminNewComponent,
    UsersAdminComponent,
    UsersAdminShellComponent,
    DepartmentsAdminShellComponent,
    DepartmentsAdminComponent,
    DepartmentAdminNewComponent,
    DepartmentsAdminEditComponent,
    ProjectCategoriesAdminShellComponent,
    ProjectCategoriesAdminComponent,
    ProjectCategoryAdminEditComponent,
    ProjectCategoryAdminNewComponent,
  ],
  providers: [DatePipe],
})
export class AdminModule {}
