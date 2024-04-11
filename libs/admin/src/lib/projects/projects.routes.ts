import { Routes } from '@angular/router';
import { agenciesDropdownResolver } from '../agencies/resolvers/agencies-dropdown.resolver';
import { ProjectsAdminShellComponent } from './projects-admin-shell/projects-admin-shell.component';
import { ProjectsAdminComponent } from './projects-admin/projects-admin.component';
import { ProjectsAdminNewComponent } from './projects-admin-new/projects-admin-new.component';
import { ProjectsAdminEditComponent } from './projects-admin-edit/projects-admin-edit.component';
import { projectsResolver } from './resolvers/projects.resolver';
import { projectResolver } from './resolvers/project.resolver';
import { projectTypesDropdownResolver } from '../project-types/resolvers/project-type-dropdown.resolver';
import { projectCategoriesDropdownResolver } from '../project-categories/resolvers/project-categories-dropdown.resolver';
import { projectImplTypesDropdownResolver } from '../project-impl-types/resolvers/project-impl-types-dropdown.resolver';
import { budgetTypesDropdownResolver } from '../budget-types/resolvers/budget-types-dropdown.resolver';
import { budgetSourcesDropdownResolver } from '../budget-sources/resolvers/budget-sources-dropdown.resolver';
import { isspsDropdownResolver } from '@issp/issp';

export const ProjectsRoutes: Routes = [
  {
    path: '',
    component: ProjectsAdminShellComponent,
    data: {
      breadcrumbSkipNode: true,
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
