import { Routes } from '@angular/router';
import { BudgetSourcesAdminEditComponent } from './budget-sources-admin-edit/budget-sources-admin-edit.component';
import { BudgetSourcesAdminNewComponent } from './budget-sources-admin-new/budget-sources-admin-new.component';
import { BudgetSourcesAdminShellComponent } from './budget-sources-admin-shell/budget-sources-admin-shell.component';
import { BudgetSourcesAdminComponent } from './budget-sources-admin/budget-sources-admin.component';
import { budgetSourceResolver } from './resolvers/budget-source.resolver';
import { budgetSourcesResolver } from './resolvers/budget-sources.resolver';

export const BudgetSourcesRoutes: Routes = [
  {
    path: '',
    component: BudgetSourcesAdminShellComponent,
    data: {
      breadcrumbSkipNode: true,
    },
    children: [
      {
        path: '',
        title: 'Budget Sources',
        component: BudgetSourcesAdminComponent,
        data: {
          breadcrumbSkipNode: true,
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
];
