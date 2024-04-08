import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MaterialModule,
  SyncfusionGridModule,
} from '@issp/common/ui/libraries';
import { ControlsModule } from '@issp/components';
import { PipesModule } from '@issp/common';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { BudgetTypesRoutes } from './budget-types.routes';
import { BudgetTypesAdminEditComponent } from './budget-types-admin-edit/budget-types-admin-edit.component';
import { BudgetTypesAdminNewComponent } from './budget-types-admin-new/budget-types-admin-new.component';
import { BudgetTypesAdminShellComponent } from './budget-types-admin-shell/budget-types-admin-shell.component';
import { BudgetTypesAdminComponent } from './budget-types-admin/budget-types-admin.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BudgetTypesRoutes),
    MaterialModule,
    SyncfusionGridModule,
    PipesModule,
    FormsModule,
    ControlsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
  ],
  declarations: [
    BudgetTypesAdminComponent,
    BudgetTypesAdminEditComponent,
    BudgetTypesAdminNewComponent,
    BudgetTypesAdminShellComponent,
  ],
})
export class BudgetTypesModule {}
