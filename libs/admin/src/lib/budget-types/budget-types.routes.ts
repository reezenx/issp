import { Routes } from '@angular/router';
import { BudgetTypesAdminEditComponent } from './budget-types-admin-edit/budget-types-admin-edit.component';
import { BudgetTypesAdminNewComponent } from './budget-types-admin-new/budget-types-admin-new.component';
import { BudgetTypesAdminShellComponent } from './budget-types-admin-shell/budget-types-admin-shell.component';
import { BudgetTypesAdminComponent } from './budget-types-admin/budget-types-admin.component';
import { budgetTypeResolver } from './resolvers/budget-type.resolver';
import { budgetTypesResolver } from './resolvers/budget-types.resolver';

export const BudgetTypesRoutes: Routes = [
  {
    path: '',
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
          breadcrumbSkipNode: true,
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
];
