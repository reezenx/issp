import { Routes } from '@angular/router';
import { ProjectTypeAdminShellComponent } from './project-types-admin-shell/project-types-admin-shell.component';
import { ProjectTypesAdminComponent } from './project-types-admin/project-types-admin.component';
import { projectTypesResolver } from './resolvers/project-types.resolver';
import { ProjectTypeAdminNewComponent } from './project-type-admin-new/project-type-admin-new.component';
import { ProjectTypeAdminEditComponent } from './project-type-admin-edit/project-type-admin-edit.component';
import { projectTypeResolver } from './resolvers/project-type.resolver';

export const ProjectTypesRoutes: Routes = [
  {
    path: '',
    component: ProjectTypeAdminShellComponent,
    data: {
      breadcrumbSkipNode: true,
    },

    children: [
      {
        path: '',
        title: 'Project Types',
        component: ProjectTypesAdminComponent,
        data: {
          breadcrumbSkipNode: true,
        },
        resolve: {
          items: projectTypesResolver,
        },
      },
      {
        path: 'new',
        title: 'New Project Type',
        component: ProjectTypeAdminNewComponent,
        data: {
          breadcrumb: 'New',
        },
        resolve: {},
      },
      {
        path: ':id',
        title: 'Edit Project Type',
        data: {
          breadcrumbRouteDataProperty: 'item.name',
        },
        component: ProjectTypeAdminEditComponent,
        resolve: {
          item: projectTypeResolver,
        },
      },
    ],
  },
];
