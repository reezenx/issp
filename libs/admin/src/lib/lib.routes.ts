import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { PivotTableAdvComponent } from './pivot-table/pivot-table.component';
import { UsersAdminShellComponent } from './users/users-admin-shell/users-admin-shell.component';
import { UsersAdminComponent } from './users/users-admin/users-admin.component';
import { UserAdminNewComponent } from './users/user-admin-new/user-admin-new.component';
import { UserAdminEditComponent } from './users/user-admin-edit/user-admin-edit.component';
import { usersResolver } from './users/resolvers/users.resolver';
import { userResolver } from './users/resolvers/user.resolver';
import { agencyDropdownResolver } from './agencies/resolvers/agency-dropdown.resolver';
import { CategoriesAdminShellComponent } from './categories/categories-admin-shell/categories-admin-shell.component';
import { CategoriesAdminComponent } from './categories/categories-admin/categories-admin.component';
import { categoriesResolver } from './categories/resolvers/categories.resolver';

export const AdminRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      title: 'Dashboard',
    },
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: {
      title: 'Projects',
    },
  },
  {
    path: 'pivot',
    component: PivotTableAdvComponent,
    data: {
      title: 'Pivot Table',
    },
  },
  {
    path: 'users',
    component: UsersAdminShellComponent,
    children: [
      {
        path: '',
        title: 'Users',
        component: UsersAdminComponent,
        resolve: {
          users: usersResolver,
        },
      },
      {
        path: 'new',
        title: 'New User',
        component: UserAdminNewComponent,
        resolve: {
          agenciesDropdown: agencyDropdownResolver,
        },
      },
      {
        path: ':id',
        title: 'Edit User',
        component: UserAdminEditComponent,
        resolve: {
          user: userResolver,
          agenciesDropdown: agencyDropdownResolver,
        },
      },
    ],
  },
  {
    path: 'categories',
    component: CategoriesAdminShellComponent,
    children: [
      {
        path: '',
        title: 'Categories',
        component: CategoriesAdminComponent,
        resolve: {
          categories: categoriesResolver,
        },
      }
    ],
  },
];
