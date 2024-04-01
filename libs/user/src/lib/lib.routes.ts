import { Routes } from '@angular/router';
import { IsspAccountComponent } from './account/account.component';
import { IsspChatComponent } from './chat/chat.component';
import { IsspCalendarComponent } from './calendar/calendar.component';
import { IsspIsspsComponent } from './issp/issps.component';
import { IsspDocumentEditorComponent } from './document-editor/document-editor.component';
import { IsspDiagramComponent } from './diagram/diagram.component';
import { IsspDetailComponent } from './issp/issp-detail/issp-detail.component';

export const UserRoutes: Routes = [
  { path: '', redirectTo: 'account', pathMatch: 'full' },
  {
    path: 'account',
    data: {
      breadcrumb: 'Account',
    },
    component: IsspAccountComponent,
  },
  {
    path: 'chat',
    data: {
      breadcrumb: 'Chat',
    },
    component: IsspChatComponent,
  },
  {
    path: 'calendar',
    data: {
      breadcrumb: 'Calendar',
    },
    component: IsspCalendarComponent,
  },
  {
    path: 'issps',
    loadChildren: () => import('@issp/issp').then((m) => m.IsspModule),
    data: {
      breadcrumb: 'ISSPs',
    },
  },
  {
    path: 'issp',
    component: IsspIsspsComponent,
    data: {
      breadcrumb: 'ISSP',
    },
  },
  {
    path: 'issp/detail/:id',
    component: IsspDetailComponent,
    data: {
      breadcrumb: 'ISSP Detail',
    },
  },
  {
    path: 'richtext',
    component: IsspDocumentEditorComponent,
    data: {
      breadcrumb: 'RichText',
    },
  },
  {
    path: 'diagram',
    component: IsspDiagramComponent,
    data: {
      breadcrumb: 'Diagram',
    },
  },
];
