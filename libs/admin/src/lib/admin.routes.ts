import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PivotTableAdvComponent } from './pivot-table/pivot-table.component';
import { UsersAdminShellComponent } from './users/users-admin-shell/users-admin-shell.component';
import { UsersAdminComponent } from './users/users-admin/users-admin.component';
import { UserAdminNewComponent } from './users/user-admin-new/user-admin-new.component';
import { UserAdminEditComponent } from './users/user-admin-edit/user-admin-edit.component';
import { usersResolver } from './users/resolvers/users.resolver';
import { userResolver } from './users/resolvers/user.resolver';
import { agenciesDropdownResolver } from './agencies/resolvers/agencies-dropdown.resolver';
import { agencyResolver } from './agencies/resolvers/agency.resolver';
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
import { ProjectImplTypesAdminShellComponent } from './project-impl-types/project-impl-types-admin-shell/project-impl-types-admin-shell.component';
import { projectImplTypesResolver } from './project-impl-types/resolvers/project-impl-types.resolver';
import { ProjectImplTypesAdminComponent } from './project-impl-types/project-impl-types-admin/project-impl-types-admin.component';
import { ProjectImplTypeAdminNewComponent } from './project-impl-types/project-impl-type-admin-new/project-impl-type-admin-new.component';
import { ProjectImplTypeAdminEditComponent } from './project-impl-types/project-impl-type-admin-edit/project-impl-type-admin-edit.component';
import { projectImplTypeResolver } from './project-impl-types/resolvers/project-impl-type.resolver';
import { BudgetSourcesAdminShellComponent } from './budget-sources/budget-sources-admin-shell/budget-sources-admin-shell.component';
import { BudgetSourcesAdminComponent } from './budget-sources/budget-sources-admin/budget-sources-admin.component';
import { BudgetSourcesAdminNewComponent } from './budget-sources/budget-sources-admin-new/budget-sources-admin-new.component';
import { BudgetSourcesAdminEditComponent } from './budget-sources/budget-sources-admin-edit/budget-sources-admin-edit.component';
import { budgetSourceResolver } from './budget-sources/resolvers/budget-source.resolver';
import { budgetSourcesResolver } from './budget-sources/resolvers/budget-sources.resolver';
import { ProjectsAdminShellComponent } from './projects/projects-admin-shell/projects-admin-shell.component';
import { ProjectsAdminComponent } from './projects/projects-admin/projects-admin.component';
import { ProjectsAdminNewComponent } from './projects/projects-admin-new/projects-admin-new.component';
import { ProjectsAdminEditComponent } from './projects/projects-admin-edit/projects-admin-edit.component';
import { projectsResolver } from './projects/resolvers/projects.resolver';
import { projectResolver } from './projects/resolvers/project.resolver';
import { projectTypesDropdownResolver } from './project-types/resolvers/project-type-dropdown.resolver';
import { projectCategoriesDropdownResolver } from './project-categories/resolvers/project-categories-dropdown.resolver';
import { projectImplTypesDropdownResolver } from './project-impl-types/resolvers/project-impl-types-dropdown.resolver';
import { budgetTypesDropdownResolver } from './budget-types/resolvers/budget-types-dropdown.resolver';
import { budgetSourcesDropdownResolver } from './budget-sources/resolvers/budget-sources-dropdown.resolver';
import { isspsDropdownResolver } from '@issp/issp';
import { userRolesDropdownResolver } from './user-roles/resolvers/user-roles-dropdown.resolver';
import { DepartmentsAdminShellComponent } from './departments/departments-admin-shell/departments-admin-shell.component';
import { departmentsResolver } from './departments/resolvers/departments.resolver';
import { DepartmentsAdminComponent } from './departments/departments-admin/departments-admin.component';
import { DepartmentAdminNewComponent } from './departments/department-admin-new/department-admin-new.component';
import { DepartmentsAdminEditComponent } from './departments/departments-admin-edit/departments-admin-edit.component';
import { departmentResolver } from './departments/resolvers/department.resolver';

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
          items: usersResolver,
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
          agenciesDropdown: agenciesDropdownResolver,
          userRolesDropdown: userRolesDropdownResolver,
        },
      },
      {
        path: ':id',
        title: 'Edit',
        component: UserAdminEditComponent,
        data: {
          breadcrumbRouteDataProperty: 'item.name',
        },
        resolve: {
          item: userResolver,
          agenciesDropdown: agenciesDropdownResolver,
          userRolesDropdown: userRolesDropdownResolver,
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
    path: 'impl-types',
    component: ProjectImplTypesAdminShellComponent,
    data: {
      breadcrumb: 'Implementation Type',
    },

    children: [
      {
        path: '',
        title: 'Implementation Type',
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
  {
    path: 'departments',
    component: DepartmentsAdminShellComponent,
    data: {
      breadcrumb: 'Department',
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
          breadcrumb: 'Edit',
        },
        component: DepartmentsAdminEditComponent,
        resolve: {
          item: departmentResolver,
        },
      },
    ],
  },
  {
    path: 'agencies',
    component: AgenciesAdminShellComponent,
    data: {
      breadcrumb: 'Agencies',
    },
    children: [
      {
        path: '',
        title: 'Agencies',
        component: AgenciesAdminComponent,
        data: {
          breadcrumbSkipNode: true,
        },
        resolve: {
          items: agenciesResolver,
        },
      },
      {
        path: 'new',
        title: 'New Agency',
        component: AgencyAdminNewComponent,
        data: {
          breadcrumb: 'New',
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
          item: agencyResolver,
        },
      },
    ],
  },
  {
    path: 'budget-types',
    component: BudgetTypesAdminShellComponent,
    data: {
      breadcrumb: 'Budget Types',
    },
    children: [
      {
        path: '',
        title: 'Budget Types',
        component: BudgetTypesAdminComponent,
        data: {
          breadcrumbSkpNode: true,
        },
        resolve: {
          items: budgetTypesResolver,
        },
      },
      {
        path: 'new',
        title: 'New Budget Type',
        component: BudgetTypesAdminNewComponent,
        data: {
          breadcrumb: 'New',
        },
        resolve: {},
      },
      {
        path: ':id',
        title: 'Edit Budget Type',
        data: {
          breadcrumbRouteDataProperty: 'item.name',
        },
        component: BudgetTypesAdminEditComponent,
        resolve: {
          item: budgetTypeResolver,
        },
      },
    ],
  },
  {
    path: 'budget-sources',
    component: BudgetSourcesAdminShellComponent,
    data: {
      breadcrumb: 'Budget Sources',
    },
    children: [
      {
        path: '',
        title: 'Budget Sources',
        component: BudgetSourcesAdminComponent,
        data: {
          breadcrumb: 'Budget Sources',
        },
        resolve: {
          items: budgetSourcesResolver,
        },
      },
      {
        path: 'new',
        title: 'New Budget Source',
        component: BudgetSourcesAdminNewComponent,
        data: {
          breadcrumb: 'New',
        },
        resolve: {},
      },
      {
        path: ':id',
        title: 'Edit Budget Source',
        data: {
          breadcrumbRouteDataProperty: 'item.name',
        },
        component: BudgetSourcesAdminEditComponent,
        resolve: {
          item: budgetSourceResolver,
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
  {
    path: 'projects',
    component: ProjectsAdminShellComponent,
    data: {
      breadcrumb: 'Projects',
    },

    children: [
      {
        path: '',
        title: 'Projects',
        component: ProjectsAdminComponent,
        data: {
          breadcrumbSkipNode: true,
        },
        resolve: {
          items: projectsResolver,
        },
      },
      {
        path: 'new',
        title: 'New Project',
        component: ProjectsAdminNewComponent,
        data: {
          breadcrumb: 'New',
        },
        resolve: {
          isspsDropdown: isspsDropdownResolver,
          agenciesDropdown: agenciesDropdownResolver,
          projectTypesDropdown: projectTypesDropdownResolver,
          projectCategoriesDropdown: projectCategoriesDropdownResolver,
          implementationTypesDropdown: projectImplTypesDropdownResolver,
          budgetTypesDropdown: budgetTypesDropdownResolver,
          budgetSourcesDropdown: budgetSourcesDropdownResolver,
        },
      },
      {
        path: ':id',
        title: 'Edit Project',
        data: {
          breadcrumbRouteDataProperty: 'item.title',
        },
        component: ProjectsAdminEditComponent,
        resolve: {
          item: projectResolver,
          isspsDropdown: isspsDropdownResolver,
          agenciesDropdown: agenciesDropdownResolver,
          projectTypesDropdown: projectTypesDropdownResolver,
          projectCategoriesDropdown: projectCategoriesDropdownResolver,
          implementationTypesDropdown: projectImplTypesDropdownResolver,
          budgetTypesDropdown: budgetTypesDropdownResolver,
          budgetSourcesDropdown: budgetSourcesDropdownResolver,
        },
      },
    ],
  },
];
