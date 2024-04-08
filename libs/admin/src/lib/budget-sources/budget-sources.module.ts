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

import { BudgetSourcesRoutes } from './budget-sources.routes';
import { BudgetSourcesAdminEditComponent } from './budget-sources-admin-edit/budget-sources-admin-edit.component';
import { BudgetSourcesAdminNewComponent } from './budget-sources-admin-new/budget-sources-admin-new.component';
import { BudgetSourcesAdminShellComponent } from './budget-sources-admin-shell/budget-sources-admin-shell.component';
import { BudgetSourcesAdminComponent } from './budget-sources-admin/budget-sources-admin.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BudgetSourcesRoutes),
    MaterialModule,
    SyncfusionGridModule,
    PipesModule,
    FormsModule,
    ControlsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
  ],
  declarations: [
    BudgetSourcesAdminComponent,
    BudgetSourcesAdminEditComponent,
    BudgetSourcesAdminNewComponent,
    BudgetSourcesAdminShellComponent,
  ],
})
export class BudgetSourcesModule {}
