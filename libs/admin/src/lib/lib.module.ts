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
import { IsspDashboardComponent } from './dashboard/dashboard.component';
import {
  IsspUsersComponent,
  UserDialogContentComponent,
} from './users/users.component';
import { AddEmployeeComponent } from './users/add/add-user.component';
import { AddProjectComponent } from './projects/add/add.component';
import {
  IsspProjectsComponent,
  ProjectDialogContentComponent,
} from './projects/projects.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
    AngularEditorModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    MatNativeDateModule,
    NgScrollbarModule,
    IsspDashboardComponent,
  ],
  declarations: [
    IsspUsersComponent,
    IsspProjectsComponent,
    AddEmployeeComponent,
    AddProjectComponent,
    ProjectDialogContentComponent,
    UserDialogContentComponent,
  ],
  providers: [DatePipe],
})
export class AdminModule {}
