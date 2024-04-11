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

import { AgenciesRoutes } from './agencies.routes';
import { AgenciesAdminShellComponent } from './agencies-admin-shell/agencies-admin-shell.component';
import { AgenciesAdminComponent } from './agencies-admin/agencies-admin.component';
import { AgencyAdminEditComponent } from './agency-admin-edit/agency-admin-edit.component';
import { AgencyAdminNewComponent } from './agency-admin-new/agency-admin-new.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AgenciesRoutes),
    MaterialModule,
    SyncfusionGridModule,
    PipesModule,
    FormsModule,
    ControlsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
  ],
  declarations: [
    AgenciesAdminComponent,
    AgenciesAdminShellComponent,
    AgencyAdminEditComponent,
    AgencyAdminNewComponent,
  ],
})
export class AgenciesModule {}
