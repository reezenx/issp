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

import { UsersRoutes } from './users.routes';
import { UserAdminEditComponent } from './user-admin-edit/user-admin-edit.component';
import { UserAdminNewComponent } from './user-admin-new/user-admin-new.component';
import { UsersAdminShellComponent } from './users-admin-shell/users-admin-shell.component';
import { UsersAdminComponent } from './users-admin/users-admin.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UsersRoutes),
    MaterialModule,
    SyncfusionGridModule,
    PipesModule,
    FormsModule,
    ControlsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
  ],
  declarations: [
    UserAdminEditComponent,
    UserAdminNewComponent,
    UsersAdminComponent,
    UsersAdminShellComponent,
  ],
})
export class UsersModule {}
