import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
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

import { UserRoutes } from './lib.routes';

import { IsspAccountComponent } from './account/account.component';
import { IsspChatComponent } from './chat/chat.component';
import {
  CalendarDialogComponent,
  IsspCalendarComponent,
} from './calendar/calendar.component';
import { CalendarFormDialogComponent } from './calendar/calendar-form-dialog/calendar-form-dialog.component';
import { IsspCoursesComponent } from './issps/issps.component';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  imports: [
    CommonModule,
    NgxPermissionsModule.forRoot(),
    RouterModule.forChild(UserRoutes),
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
  ],
  declarations: [
    IsspAccountComponent,
    IsspChatComponent,
    IsspCalendarComponent,
    IsspCoursesComponent,
    CalendarFormDialogComponent,
    CalendarDialogComponent,
  ],
})
export class UserModule {}
