import { Routes } from '@angular/router';
import { permissionsResolver } from './resolvers/permissions.resolver';
import { PermissionsAdminShellComponent } from './permissions-admin-shell/permissions-admin-shell.component';
import { PermissionsAdminComponent } from './permissions-admin/permissions-admin.component';

export const PermissionsRoutes: Routes = [
  {
    path: '',
    component: PermissionsAdminShellComponent,
    data: {
      breadcrumbSkipNode: true,
    },
    children: [
      {
        path: '',
        title: 'Permissions',
        component: PermissionsAdminComponent,
        data: {
          breadcrumbSkipNode: true,
        },
        resolve: {
          items: permissionsResolver,
        },
      },
      {
        path: 'new',
        title: 'New Project',
        component: PermissionsAdminComponent,
        data: {
          breadcrumb: 'New',
        },
        resolve: {},
      },
      {
        path: ':id',
        title: 'Edit Project',
        data: {
          breadcrumbRouteDataProperty: 'item.title',
        },
        component: PermissionsAdminComponent,
        resolve: {},
      },
    ],
  },
];
