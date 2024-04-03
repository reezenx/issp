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
import { AgenciesAdminShellComponent } from './agencies/agencies-admin-shell/agencies-admin-shell.component';
import { AgenciesAdminComponent } from './agencies/agencies-admin/agencies-admin.component';
import { AgencyAdminNewComponent } from './agencies/agency-admin-new/agency-admin-new.component';
import { AgencyAdminEditComponent } from './agencies/agency-admin-edit/agency-admin-edit.component';
import { agenciesResolver } from './agencies/resolvers/agencies.resolver';
import { CategoryAdminNewComponent } from './categories/category-admin-new/category-admin-new.component';
import { CategoryAdminEditComponent } from './categories/category-admin-edit/category-admin-edit.component';
import { categoryResolver } from './categories/resolvers/category.resolver';
import { DocumentEditorComponent } from './document-editor/document-editor.component';
import { DiagramComponent } from './diagram/diagram.component';
import { BudgetTypesAdminShellComponent } from './budget-types/budget-types-admin-shell/budget-types-admin-shell.component';
import { budgetTypesResolver } from './budget-types/resolvers/budget-types.resolver';
import { BudgetTypesAdminNewComponent } from './budget-types/budget-types-admin-new/budget-types-admin-new.component';
import { BudgetTypesAdminEditComponent } from './budget-types/budget-types-admin-edit/budget-types-admin-edit.component';
import { BudgetTypesAdminComponent } from './budget-types/budget-types-admin/budget-types-admin.component';
import { budgetTypeResolver } from './budget-types/resolvers/budget-type.resolver';

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
    path: 'projects',
    title: 'Projects',
    component: ProjectsComponent,
    data: {
      breadcrumb: 'Projects',
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
    path: 'users',
    component: UsersAdminShellComponent,
    data: {
      breadcrumb: 'Users',
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
          users: usersResolver,
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
          agenciesDropdown: agencyDropdownResolver,
        },
      },
      {
        path: ':id',
        title: 'Edit',
        component: UserAdminEditComponent,
        data: {
          breadcrumbRouteDataProperty: 'user.name',
        },
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
    data: {
      breadcrumb: 'Categories',
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
  {
    path: 'agencies',
    component: AgenciesAdminShellComponent,
    data: {
      breadcrumbSkipNode: true,
    },
    children: [
      {
        path: '',
        title: 'Agencies',
        component: AgenciesAdminComponent,
        data: {
          breadcrumb: 'Agencies',
        },
        resolve: {
          agencies: agenciesResolver,
        },
      },
      {
        path: 'new',
        title: 'New Agency',
        component: AgencyAdminNewComponent,
        data: {
          breadcrumb: 'New',
        },
        resolve: {
          // agenciesDropdown: agencyDropdownResolver,
        },
      },
      {
        path: ':id',
        title: 'Edit Agency',
        data: {
          breadcrumb: 'Edit',
        },
        component: AgencyAdminEditComponent,
        resolve: {
          // agency: agencyResolver,
          // agenciesDropdown: agencyDropdownResolver,
        },
      },
    ],
  },
  {
    path: 'budget-types',
    component: BudgetTypesAdminShellComponent,
    data: {
      breadcrumbSkipNode: true,
    },
    children: [
      {
        path: '',
        title: 'Budget Types',
        component: BudgetTypesAdminComponent,
        data: {
          breadcrumb: 'Budget Types',
        },
        resolve: {
          budgettypes: budgetTypesResolver,
        },
      },
      {
        path: 'new',
        title: 'New Budget Type',
        component: BudgetTypesAdminNewComponent,
        data: {
          breadcrumb: 'New',
        },
        resolve: {
          // agenciesDropdown: agencyDropdownResolver,
        },
      },
      {
        path: ':id',
        title: 'Edit Budget Type',
        data: {
          breadcrumb: 'Edit',
        },
        component: BudgetTypesAdminEditComponent,
        resolve: {
          item: budgetTypeResolver,
          // agency: agencyResolver,
          // agenciesDropdown: agencyDropdownResolver,
        },
      },
    ],
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
];
