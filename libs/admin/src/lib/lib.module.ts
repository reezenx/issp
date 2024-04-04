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

import { AdminRoutes } from './lib.routes';
import { DashboardComponent } from './dashboard/dashboard.component';

import {
  ProjectsComponent,
  ProjectDialogContentComponent,
} from './projects/projects.component';
import { ControlsModule, PivotTableComponent } from '@issp/components';
import { PivotTableAdvComponent } from './pivot-table/pivot-table.component';
import { UsersAdminShellComponent } from './users/users-admin-shell/users-admin-shell.component';
import { UsersAdminComponent } from './users/users-admin/users-admin.component';
import { UserAdminNewComponent } from './users/user-admin-new/user-admin-new.component';
import { UserAdminEditComponent } from './users/user-admin-edit/user-admin-edit.component';
import { PipesModule } from '@issp/common';
import { CategoriesAdminComponent } from './categories/categories-admin/categories-admin.component';
import { CategoriesAdminShellComponent } from './categories/categories-admin-shell/categories-admin-shell.component';
import { AgenciesAdminShellComponent } from './agencies/agencies-admin-shell/agencies-admin-shell.component';
import { AgenciesAdminComponent } from './agencies/agencies-admin/agencies-admin.component';
import { AgencyAdminNewComponent } from './agencies/agency-admin-new/agency-admin-new.component';
import { AgencyAdminEditComponent } from './agencies/agency-admin-edit/agency-admin-edit.component';
import { CategoryAdminNewComponent } from './categories/category-admin-new/category-admin-new.component';
import { CategoryAdminEditComponent } from './categories/category-admin-edit/category-admin-edit.component';
import { BudgetTypesAdminShellComponent } from './budget-types/budget-types-admin-shell/budget-types-admin-shell.component';
import { BudgetTypesAdminComponent } from './budget-types/budget-types-admin/budget-types-admin.component';
import { BudgetTypesAdminNewComponent } from './budget-types/budget-types-admin-new/budget-types-admin-new.component';
import { BudgetTypesAdminEditComponent } from './budget-types/budget-types-admin-edit/budget-types-admin-edit.component';
import { AdminProjectImplTypeShellComponent } from './project-impl-types/admin-project-impl-type-shell/admin-project-impl-type-shell.component';
import { ProjectImplTypeAdminComponent } from './project-impl-types/admin-project-impl-types/admin-project-impl-types.component';
import { ProjectImplTypeAdminNewComponent } from './project-impl-types/admin-project-impl-type-new/admin-project-impl-type-new.component';
import { ProjectImplTypeAdminEditComponent } from './project-impl-types/admin-project-impl-type-edit/admin-project-impl-type-edit.component';
import { BudgetSourcesAdminComponent } from './budget-sources/budget-sources-admin/budget-sources-admin.component';
import { BudgetSourcesAdminNewComponent } from './budget-sources/budget-sources-admin-new/budget-sources-admin-new.component';
import { BudgetSourcesAdminEditComponent } from './budget-sources/budget-sources-admin-edit/budget-sources-admin-edit.component';
import { BudgetSourcesAdminShellComponent } from './budget-sources/budget-sources-admin-shell/budget-sources-admin-shell.component';

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
    ProjectsComponent,
    ProjectDialogContentComponent,
    PivotTableAdvComponent,
    UsersAdminShellComponent,
    UsersAdminComponent,
    UserAdminNewComponent,
    UserAdminEditComponent,
    CategoriesAdminComponent,
    CategoriesAdminShellComponent,
    CategoryAdminNewComponent,
    CategoryAdminEditComponent,
    AgenciesAdminShellComponent,
    AgenciesAdminComponent,
    AgencyAdminNewComponent,
    AgencyAdminEditComponent,
    BudgetTypesAdminShellComponent,
    BudgetTypesAdminComponent,
    BudgetTypesAdminNewComponent,
    BudgetTypesAdminEditComponent,
    BudgetSourcesAdminShellComponent,
    BudgetSourcesAdminComponent,
    BudgetSourcesAdminNewComponent,
    BudgetSourcesAdminEditComponent,
    AdminProjectImplTypeShellComponent,
    ProjectImplTypeAdminComponent,
    ProjectImplTypeAdminNewComponent,
    ProjectImplTypeAdminEditComponent,
  ],
  providers: [DatePipe],
})
export class AdminModule {}
