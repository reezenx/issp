import { Routes } from '@angular/router';
import { DepartmentAdminNewComponent } from './department-admin-new/department-admin-new.component';
import { DepartmentsAdminEditComponent } from './departments-admin-edit/departments-admin-edit.component';
import { DepartmentsAdminShellComponent } from './departments-admin-shell/departments-admin-shell.component';
import { DepartmentsAdminComponent } from './departments-admin/departments-admin.component';
import { departmentResolver } from './resolvers/department.resolver';
import { departmentsResolver } from './resolvers/departments.resolver';

export const DepartmentsRoutes: Routes = [
  {
    path: '',
    component: DepartmentsAdminShellComponent,
    data: {
      breadcrumbSkipNode: true,
    },
    children: [
      {
        path: '',
        title: 'Department',
        component: DepartmentsAdminComponent,
        data: {
          breadcrumbSkipNode: true,
        },
        resolve: {
          items: departmentsResolver,
        },
      },
      {
        path: 'new',
        title: 'New Department',
        component: DepartmentAdminNewComponent,
        data: {
          breadcrumb: 'New',
        },
        resolve: {},
      },
      {
        path: ':id',
        title: 'Edit Department',
        data: {
          breadcrumbRouteDataProperty: 'item.code',
        },
        component: DepartmentsAdminEditComponent,
        resolve: {
          item: departmentResolver,
        },
      },
    ],
  },
];
