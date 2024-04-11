import { Routes } from '@angular/router';
import { UserRolesAdminShellComponent } from './user-roles-admin-shell/user-roles-admin-shell.component';
import { UserRolesAdminComponent } from './user-roles-admin/user-roles-admin.component';
import { UserRoleAdminNewComponent } from './user-role-admin-new/user-role-admin-new.component';
import { usersResolver } from './resolvers/user-roles.resolver';
import { UserRoleAdminEditComponent } from './user-role-admin-edit/user-role-admin-edit.component';
import { userResolver } from './resolvers/user-role.resolver';
import { userRolesDropdownResolver } from './resolvers/user-roles-dropdown.resolver';

export const UserRolesRoutes: Routes = [
  {
    path: '',
    component: UserRolesAdminShellComponent,
    data: {
      breadcrumbSkipNode: true,
    },
    children: [
      {
        path: '',
        title: 'User Role',
        component: UserRolesAdminComponent,
        data: {
          breadcrumbSkipNode: true,
        },
        resolve: {
          items: usersResolver,
        },
      },
      {
        path: 'new',
        title: 'New User Role',
        component: UserRoleAdminNewComponent,
        data: {
          breadcrumb: 'New',
        },
        resolve: {
          permissionsDropdown: userRolesDropdownResolver,
        },
      },
      {
        path: ':id',
        title: 'Edit User Role',
        data: {
          breadcrumb: 'Edit',
        },
        component: UserRoleAdminEditComponent,
        resolve: {
          item: userResolver,
        },
      },
    ],
  },
];
