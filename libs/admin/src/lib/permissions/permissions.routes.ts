import { Routes } from '@angular/router';
import { permissionsResolver } from './resolvers/permissions.resolver';
import { PermissionsAdminShellComponent } from './permissions-admin-shell/permissions-admin-shell.component';
import { PermissionsAdminComponent } from './permissions-admin/permissions-admin.component';
import { PermissionAdminNewComponent } from './permissions-admin-new/permission-admin-new.component';
import { PermissionAdminEditComponent } from './permissions-admin-edit/permission-admin-edit.component';
import { permissionResolver } from './resolvers/permission.resolver';

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
        title: 'New Permission',
        component: PermissionAdminNewComponent,
        data: {
          breadcrumb: 'New',
        },
        resolve: {},
      },
      {
        path: ':id',
        title: 'Edit Permission',
        data: {
          breadcrumb: 'Edit',
        },
        component: PermissionAdminEditComponent,
        resolve: {
          item: permissionResolver,
        },
      },
    ],
  },
];
