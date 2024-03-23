import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@issp/common/ui/libraries';
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
  UsersComponent,
  UserDialogContentComponent,
} from './users/users.component';
import { AddEmployeeComponent } from './users/add/add-user.component';
import { AddProjectComponent } from './projects/add/add.component';
import {
  ProjectsComponent,
  ProjectDialogContentComponent,
} from './projects/projects.component';
import { PivotTableComponent } from '@issp/components';
import { PivotTableAdvComponent } from './pivot-table/pivot-table.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    MaterialModule,
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
    UsersComponent,
    ProjectsComponent,
    AddEmployeeComponent,
    AddProjectComponent,
    ProjectDialogContentComponent,
    UserDialogContentComponent,
    PivotTableAdvComponent,
  ],
  providers: [DatePipe],
})
export class AdminModule {}
