import { Routes } from '@angular/router';
import { agenciesDropdownResolver } from '../agencies/resolvers/agencies-dropdown.resolver';
import { userRolesDropdownResolver } from '../user-roles/resolvers/user-roles-dropdown.resolver';
import { userResolver } from './resolvers/user.resolver';
import { usersResolver } from './resolvers/users.resolver';
import { UserAdminEditComponent } from './user-admin-edit/user-admin-edit.component';
import { UserAdminNewComponent } from './user-admin-new/user-admin-new.component';
import { UsersAdminShellComponent } from './users-admin-shell/users-admin-shell.component';
import { UsersAdminComponent } from './users-admin/users-admin.component';

export const UsersRoutes: Routes = [
  {
    path: '',
    component: UsersAdminShellComponent,
    data: {
      breadcrumbSkipNode: true,
    },
    children: [
      {
        path: '',
        title: 'Users',
        component: UsersAdminComponent,
        data: {
          breadcrumbSkipNode: true,
        },
        resolve: {
          items: usersResolver,
        },
      },
      {
        path: 'new',
        title: 'New User',
        component: UserAdminNewComponent,
        data: {
          breadcrumb: 'New',
        },
        resolve: {
          agenciesDropdown: agenciesDropdownResolver,
          userRolesDropdown: userRolesDropdownResolver,
        },
      },
      {
        path: ':id',
        title: 'Edit',
        component: UserAdminEditComponent,
        data: {
          breadcrumbRouteDataProperty: 'item.name',
        },
        resolve: {
          item: userResolver,
          agenciesDropdown: agenciesDropdownResolver,
          userRolesDropdown: userRolesDropdownResolver,
        },
      },
    ],
  },
];
