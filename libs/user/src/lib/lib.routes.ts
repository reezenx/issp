import { Routes } from '@angular/router';
import { IsspAccountComponent } from './account/account.component';
import { IsspChatComponent } from './chat/chat.component';
import { IsspCalendarComponent } from './calendar/calendar.component';
import { IsspCoursesComponent } from './issps/issps.component';
import { IsspPermissionComponent } from './permission/permission.component';
import { IsspDocumentEditorComponent } from './document-editor/document-editor.component';
import { IsspDiagramComponent } from './diagram/diagram.component';

export const UserRoutes: Routes = [
  { path: '', redirectTo: 'account', pathMatch: 'full' },
  {
    path: 'account',
    component: IsspAccountComponent,
  },
  {
    path: 'chat',
    component: IsspChatComponent,
  },
  {
    path: 'calendar',
    component: IsspCalendarComponent,
  },
  {
    path: 'issp',
    component: IsspCoursesComponent,
  },
  {
    path: 'permission',
    component: IsspPermissionComponent,
  },
  {
    path: 'richtext',
    component: IsspDocumentEditorComponent,
  },
  {
    path: 'diagram',
    component: IsspDiagramComponent,
  },
];
