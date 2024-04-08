import { Routes } from '@angular/router';
import { AgenciesAdminShellComponent } from './agencies-admin-shell/agencies-admin-shell.component';
import { AgenciesAdminComponent } from './agencies-admin/agencies-admin.component';
import { AgencyAdminEditComponent } from './agency-admin-edit/agency-admin-edit.component';
import { AgencyAdminNewComponent } from './agency-admin-new/agency-admin-new.component';
import { agenciesResolver } from './resolvers/agencies.resolver';
import { agencyResolver } from './resolvers/agency.resolver';

export const AgenciesRoutes: Routes = [
  {
    path: '',
    component: AgenciesAdminShellComponent,
    data: {
      breadcrumbSkipNode: true,
    },
    children: [
      {
        path: '',
        title: 'Agencies',
        component: AgenciesAdminComponent,
        data: {
          breadcrumbSkipNode: true,
        },
        resolve: {
          items: agenciesResolver,
        },
      },
      {
        path: 'new',
        title: 'New Agency',
        component: AgencyAdminNewComponent,
        data: {
          breadcrumb: 'New',
        },
      },
      {
        path: ':id',
        title: 'Edit Agency',
        data: {
          breadcrumb: 'Edit',
        },
        component: AgencyAdminEditComponent,
        resolve: {
          item: agencyResolver,
        },
      },
    ],
  },
];
