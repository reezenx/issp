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
import { PivotTableComponent } from '@issp/components';
import { PivotTableAdvComponent } from './pivot-table/pivot-table.component';
import { UsersAdminShellComponent } from './users/users-admin-shell/users-admin-shell.component';
import { UsersAdminComponent } from './users/users-admin/users-admin.component';
import { UserAdminNewComponent } from './users/user-admin-new/user-admin-new.component';
import { UserAdminEditComponent } from './users/user-admin-edit/user-admin-edit.component';
import { PipesModule } from '@issp/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    MaterialModule,
    SyncfusionGridModule,
    PipesModule,
    FormsModule,
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
  ],
  providers: [DatePipe],
})
export class AdminModule {}
