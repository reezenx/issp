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

import { UserRolesRoutes } from './user-roles.routes';
import { UserRolesAdminShellComponent } from './user-roles-admin-shell/user-roles-admin-shell.component';
import { UserRolesAdminComponent } from './user-roles-admin/user-roles-admin.component';
import { UserRoleAdminNewComponent } from './user-role-admin-new/user-role-admin-new.component';
import { UserRoleAdminEditComponent } from './user-role-admin-edit/user-role-admin-edit.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserRolesRoutes),
    MaterialModule,
    SyncfusionGridModule,
    PipesModule,
    FormsModule,
    ControlsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
  ],
  declarations: [
    UserRolesAdminShellComponent,
    UserRolesAdminComponent,
    UserRoleAdminNewComponent,
    UserRoleAdminEditComponent,
  ],
})
export class UserRolesModule {}
