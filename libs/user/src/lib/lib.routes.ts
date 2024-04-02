import { Routes } from '@angular/router';
import { IsspChatComponent } from './chat/chat.component';
import { IsspCalendarComponent } from './calendar/calendar.component';
import { UserAccountShellComponent } from './account/user-account-shell/user-account-shell.component';
import { UserAccountDashboardComponent } from './account/user-account-dashboard/user-account-dashboard.component';
import { UserAccountMonitoringComponent } from './account/user-account-monitoring/user-account-monitoring.component';
import { UserAccountApplicationComponent } from './account/user-account-application/user-account-application.component';
import { UserAccountAmendmentComponent } from './account/user-account-amendment/user-account-amendment.component';
import { UserAccountItraComponent } from './account/user-account-itra/user-account-itra.component';
import { isspsResolver } from './resolvers/issps.resolver';

export const UserRoutes: Routes = [
  { path: '', redirectTo: 'account', pathMatch: 'full' },
  {
    path: 'account',
    data: {
      breadcrumb: 'Account',
    },
    component: UserAccountShellComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        title: 'Dashboard',
        data: {
          breadcrumb: 'Dashboard',
        },
        component: UserAccountDashboardComponent,
      },
      {
        path: 'monitoring',

        title: 'Monitoring',
        data: {
          breadcrumb: 'Monitoring',
        },
        component: UserAccountMonitoringComponent,
        resolve: {
          items: isspsResolver,
        },
      },
      {
        path: 'application',
        title: 'Application',
        data: {
          breadcrumb: 'Application',
        },
        component: UserAccountApplicationComponent,
        resolve: {
          items: isspsResolver,
        },
      },
      {
        path: 'amendment',
        title: 'Amendment',
        data: {
          breadcrumb: 'Amendment',
        },
        component: UserAccountAmendmentComponent,
        resolve: {
          items: isspsResolver,
        },
      },
      {
        path: 'itra',
        title: 'ITRA',
        data: {
          breadcrumb: 'ITRA',
        },
        component: UserAccountItraComponent,
        resolve: {
          items: isspsResolver,
        },
      },
    ],
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
];
