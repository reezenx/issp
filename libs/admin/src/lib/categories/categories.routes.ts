import { Routes } from '@angular/router';
import { CategoriesAdminShellComponent } from './categories-admin-shell/categories-admin-shell.component';
import { CategoriesAdminComponent } from './categories-admin/categories-admin.component';
import { CategoryAdminEditComponent } from './category-admin-edit/category-admin-edit.component';
import { CategoryAdminNewComponent } from './category-admin-new/category-admin-new.component';
import { categoriesResolver } from './resolvers/categories.resolver';
import { categoryResolver } from './resolvers/category.resolver';

export const UsersRoutes: Routes = [
  {
    path: '',
    component: CategoriesAdminShellComponent,
    data: {
      breadcrumbSkipNode: true,
    },

    children: [
      {
        path: '',
        title: 'Categories',
        component: CategoriesAdminComponent,
        data: {
          breadcrumbSkipNode: true,
        },
        resolve: {
          categories: categoriesResolver,
        },
      },
      {
        path: 'new',
        title: 'New Category',
        component: CategoryAdminNewComponent,
        data: {
          breadcrumb: 'New',
        },
        resolve: {},
      },
      {
        path: ':id',
        title: 'Edit Category',
        data: {
          breadcrumb: 'Edit',
        },
        component: CategoryAdminEditComponent,
        resolve: {
          item: categoryResolver,
        },
      },
    ],
  },
];
