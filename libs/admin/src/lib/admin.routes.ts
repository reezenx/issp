import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DiagramComponent } from './diagram/diagram.component';
import { DocumentEditorComponent } from './document-editor/document-editor.component';
import { ReportsComponent } from './reports/reports.component';
import { projectsResolver } from './projects/resolvers/projects.resolver';

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
    path: 'reports',
    title: 'Reports',
    component: ReportsComponent,
    data: {
      breadcrumb: 'Reports',
    },
    resolve: {
      items: projectsResolver,
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
    path: 'project-types',
    loadChildren: () =>
      import('./project-types/project-types.module').then(
        (m) => m.ProjectTypesModule
      ),
    data: {
      breadcrumb: 'Project Types',
    },
  },
  {
    path: 'project-type-groups',
    loadChildren: () =>
      import('./project-type-groups/project-type-groups.module').then(
        (m) => m.ProjectTypeGroupsModule
      ),
    data: {
      breadcrumb: 'Project Type Groups',
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
    path: 'user-roles',
    loadChildren: () =>
      import('./user-roles/user-roles.module').then((m) => m.UserRolesModule),
    data: {
      breadcrumb: 'User Roles',
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
