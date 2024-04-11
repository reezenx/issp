import { Routes } from '@angular/router';
import { ProjectTypeGroupAdminEditComponent } from './project-type-group-admin-edit/project-type-group-admin-edit.component';
import { ProjectTypeGroupAdminNewComponent } from './project-type-group-admin-new/project-type-group-admin-new.component';
import { ProjectTypeGroupsAdminComponent } from './project-type-groups-admin/project-type-groups-admin.component';
import { ProjectTypeGroupsAdminShellComponent } from './project-type-groups-admin-shell/project-type-groups-shell.component';
import { projectTypeGroupResolver } from './resolvers/project-type-group.resolver';
import { projectTypeGroupsResolver } from './resolvers/project-type-groups.resolver';
export const ProjectTypeGroupsRoutes: Routes = [
  {
    path: '',
    component: ProjectTypeGroupsAdminShellComponent,
    data: {
      breadcrumbSkipNode: true,
    },
    children: [
      {
        path: '',
        title: 'Project Type Groups',
        component: ProjectTypeGroupsAdminComponent,
        data: {
          breadcrumbSkipNode: true,
        },
        resolve: {
          items: projectTypeGroupsResolver,
        },
      },
      {
        path: 'new',
        title: 'New Project Type Group',
        component: ProjectTypeGroupAdminNewComponent,
        data: {
          breadcrumb: 'New',
        },
        resolve: {},
      },
      {
        path: ':id',
        title: 'Edit Project Type Group',
        data: {
          breadcrumbRouteDataProperty: 'item.name',
        },
        component: ProjectTypeGroupAdminEditComponent,
        resolve: {
          item: projectTypeGroupResolver,
        },
      },
    ],
  },
];
