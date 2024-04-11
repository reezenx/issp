import { Routes } from '@angular/router';
import { ProjectCategoriesAdminShellComponent } from './project-categories-admin-shell/project-categories-admin-shell.component';
import { ProjectCategoriesAdminComponent } from './project-categories-admin/project-categories-admin.component';
import { ProjectCategoryAdminEditComponent } from './project-category-admin-edit/project-category-admin-edit.component';
import { ProjectCategoryAdminNewComponent } from './project-category-admin-new/project-category-admin-new.component';
import { projectCategoriesResolver } from './resolvers/project-categories.resolver';
import { projectCategoryResolver } from './resolvers/project-category.resolver';

export const UsersRoutes: Routes = [
  {
    path: '',
    component: ProjectCategoriesAdminShellComponent,
    data: {
      breadcrumbSkipNode: true,
    },
    children: [
      {
        path: '',
        title: 'Project Category',
        component: ProjectCategoriesAdminComponent,
        data: {
          breadcrumbSkipNode: true,
        },
        resolve: {
          items: projectCategoriesResolver,
        },
      },
      {
        path: 'new',
        title: 'New Project Category',
        component: ProjectCategoryAdminNewComponent,
        data: {
          breadcrumb: 'New',
        },
        resolve: {},
      },
      {
        path: ':id',
        title: 'Edit Project Category',
        data: {
          breadcrumbRouteDataProperty: 'item.name',
        },
        component: ProjectCategoryAdminEditComponent,
        resolve: {
          item: projectCategoryResolver,
        },
      },
    ],
  },
];
