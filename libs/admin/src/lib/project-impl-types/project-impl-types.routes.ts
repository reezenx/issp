import { Routes } from '@angular/router';

import { ProjectImplTypeAdminEditComponent } from './project-impl-type-admin-edit/project-impl-type-admin-edit.component';
import { ProjectImplTypeAdminNewComponent } from './project-impl-type-admin-new/project-impl-type-admin-new.component';
import { ProjectImplTypesAdminShellComponent } from './project-impl-types-admin-shell/project-impl-types-admin-shell.component';
import { ProjectImplTypesAdminComponent } from './project-impl-types-admin/project-impl-types-admin.component';
import { projectImplTypeResolver } from './resolvers/project-impl-type.resolver';
import { projectImplTypesResolver } from './resolvers/project-impl-types.resolver';

export const ProjectImplTypesRoutes: Routes = [
  {
    path: '',
    component: ProjectImplTypesAdminShellComponent,
    data: {
      breadcrumbSkipNode: true,
    },
    children: [
      {
        path: '',
        title: 'Implementation Types',
        component: ProjectImplTypesAdminComponent,
        data: {
          breadcrumbSkipNode: true,
        },
        resolve: {
          items: projectImplTypesResolver,
        },
      },
      {
        path: 'new',
        title: 'New Implementation Type',
        component: ProjectImplTypeAdminNewComponent,
        data: {
          breadcrumb: 'New',
        },
        resolve: {},
      },
      {
        path: ':id',
        title: 'Edit Implementation Type',
        data: {
          breadcrumbRouteDataProperty: 'item.name',
        },
        component: ProjectImplTypeAdminEditComponent,
        resolve: {
          item: projectImplTypeResolver,
        },
      },
    ],
  },
];
