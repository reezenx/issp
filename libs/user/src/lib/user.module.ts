import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
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

import { UserRoutes } from './user.routes';

import { IsspChatComponent } from './chat/chat.component';
import {
  CalendarDialogComponent,
  IsspCalendarComponent,
} from './calendar/calendar.component';
import { CalendarFormDialogComponent } from './calendar/calendar-form-dialog/calendar-form-dialog.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { UserAccountShellComponent } from './account/user-account-shell/user-account-shell.component';
import { UserAccountDashboardComponent } from './account/user-account-dashboard/user-account-dashboard.component';
import { UserAccountMonitoringComponent } from './account/user-account-monitoring/user-account-monitoring.component';
import { UserAccountApplicationComponent } from './account/user-account-application/user-account-application.component';
import { UserAccountAmendmentComponent } from './account/user-account-amendment/user-account-amendment.component';
import { UserAccountItraComponent } from './account/user-account-itra/user-account-itra.component';
import { PipesModule } from '@issp/common';

@NgModule({
  imports: [
    CommonModule,
    NgxPermissionsModule.forRoot(),
    RouterModule.forChild(UserRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    SyncfusionGridModule,
    TablerIconsModule.pick(TablerIcons),
    AngularEditorModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    MatNativeDateModule,
    NgScrollbarModule,
    UserAccountDashboardComponent,
  ],
  declarations: [
    IsspChatComponent,
    IsspCalendarComponent,
    CalendarFormDialogComponent,
    CalendarDialogComponent,
    UserAccountShellComponent,
    UserAccountMonitoringComponent,
    UserAccountApplicationComponent,
    UserAccountAmendmentComponent,
    UserAccountItraComponent,
  ],
})
export class UserModule {}
