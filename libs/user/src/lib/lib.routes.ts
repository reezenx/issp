import { Routes } from '@angular/router';
import { IsspAccountComponent } from './account/account.component';
import { IsspChatComponent } from './chat/chat.component';
import { IsspCalendarComponent } from './calendar/calendar.component';
import { IsspIsspsComponent } from './issp/issps.component';
import { IsspPermissionComponent } from './permission/permission.component';
import { IsspDocumentEditorComponent } from './document-editor/document-editor.component';
import { IsspDiagramComponent } from './diagram/diagram.component';
import { IsspDetailComponent } from './issp/issp-detail/issp-detail.component';

export const UserRoutes: Routes = [
  { path: '', redirectTo: 'account', pathMatch: 'full' },
  {
    path: 'account',
    data: {
      title: 'Account',
    },
    component: IsspAccountComponent,
  },
  {
    path: 'chat',
    data: {
      title: 'Chat',
    },
    component: IsspChatComponent,
  },
  {
    path: 'calendar',
    data: {
      title: 'Calendar',
    },
    component: IsspCalendarComponent,
  },
  {
    path: 'issps',
    loadChildren: () => import('@issp/issp').then((m) => m.IsspModule),
  },
  {
    path: 'issp',
    component: IsspIsspsComponent,
    data: {
      title: 'ISSP',
    },
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
    data: {
      title: 'Permission',
    },
  },
  {
    path: 'richtext',
    component: IsspDocumentEditorComponent,
    data: {
      title: 'RichText',
    },
  },
  {
    path: 'diagram',
    component: IsspDiagramComponent,
    data: {
      title: 'Diagram',
    },
  },
];
