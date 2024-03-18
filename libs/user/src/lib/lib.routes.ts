import { Routes } from '@angular/router';
import { IsspAccountComponent } from './account/account.component';
import { IsspChatComponent } from './chat/chat.component';
import { IsspCalendarComponent } from './calendar/calendar.component';
import { IsspIsspsComponent } from './issps/issps.component';
import { IsspPermissionComponent } from './permission/permission.component';
import { IsspDocumentEditorComponent } from './document-editor/document-editor.component';
import { IsspDiagramComponent } from './diagram/diagram.component';
import { IsspDetailComponent } from './issps/issp-detail/issp-detail.component';

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
    component: IsspIsspsComponent,
  },
  {
    path: 'issp/detail/:id',
    component: IsspDetailComponent,
    data: {
      title: 'ISSP Detail',
    },
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
