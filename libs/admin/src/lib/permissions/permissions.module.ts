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

import { PermissionsRoutes } from './permissions.routes';
import { PermissionsAdminShellComponent } from './permissions-admin-shell/permissions-admin-shell.component';
import { PermissionsAdminComponent } from './permissions-admin/permissions-admin.component';
import { PermissionAdminNewComponent } from './permissions-admin-new/permission-admin-new.component';
import { PermissionAdminEditComponent } from './permissions-admin-edit/permission-admin-edit.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PermissionsRoutes),
    MaterialModule,
    SyncfusionGridModule,
    PipesModule,
    FormsModule,
    ControlsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
  ],
  declarations: [
    PermissionsAdminShellComponent,
    PermissionsAdminComponent,
    PermissionAdminNewComponent,
    PermissionAdminEditComponent,
  ],
})
export class PermissionsModule {}
