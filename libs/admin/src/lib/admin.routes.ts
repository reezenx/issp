import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DiagramComponent } from './diagram/diagram.component';
import { DocumentEditorComponent } from './document-editor/document-editor.component';
import { PivotTableAdvComponent } from './pivot-table/pivot-table.component';

export const AdminRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    title: 'Dashboard',
    component: DashboardComponent,
    data: {
      breadcrumb: 'Dashboard',
    },
  },
  {
    path: 'pivot',
    title: 'Reports',
    component: PivotTableAdvComponent,
    data: {
      breadcrumb: 'Pivot Table',
    },
  },
  {
    path: 'richtext',
    component: DocumentEditorComponent,
    data: {
      breadcrumb: 'RichText',
    },
  },
  {
    path: 'diagram',
    component: DiagramComponent,
    data: {
      breadcrumb: 'Diagram',
    },
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./projects/projects.module').then((m) => m.ProjectsModule),
    data: {
      breadcrumb: 'Projects',
    },
  },
  {
    path: 'departments',
    loadChildren: () =>
      import('./departments/departments.module').then(
        (m) => m.DepartmentsModule
      ),
    data: {
      breadcrumb: 'Departments',
    },
  },
  {
    path: 'project-categories',
    loadChildren: () =>
      import('./project-categories/project-categories.module').then(
        (m) => m.ProjectCategoriesModule
      ),
    data: {
      breadcrumb: 'Project Categories',
    },
  },
  {
    path: 'agencies',
    loadChildren: () =>
      import('./agencies/agencies.module').then((m) => m.AgenciesModule),
    data: {
      breadcrumb: 'Agencies',
    },
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
    data: {
      breadcrumb: 'Users',
    },
  },
  {
    path: 'impl-types',
    loadChildren: () =>
      import('./project-impl-types/project-impl-types.module').then(
        (m) => m.ProjectImplementationTypesModule
      ),
    data: {
      breadcrumb: 'Implementation Type',
    },
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./categories/categories.module').then((m) => m.CategoriesModule),
    data: {
      breadcrumb: 'Categories',
    },
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./categories/categories.module').then((m) => m.CategoriesModule),
    data: {
      breadcrumb: 'Categories',
    },
  },
  {
    path: 'budget-types',
    loadChildren: () =>
      import('./budget-types/budget-types.module').then(
        (m) => m.BudgetTypesModule
      ),
    data: {
      breadcrumb: 'Budget Types',
    },
  },
  {
    path: 'budget-sources',
    loadChildren: () =>
      import('./budget-sources/budget-sources.module').then(
        (m) => m.BudgetSourcesModule
      ),
    data: {
      breadcrumb: 'Budget Sources',
    },
  },
  {
    path: 'permissions',
    loadChildren: () =>
      import('./permissions/permissions.module').then(
        (m) => m.PermissionsModule
      ),
    data: {
      breadcrumb: 'Permissions',
    },
  },
];
