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

import { DepartmentsRoutes } from './departments.routes';
import { DepartmentAdminNewComponent } from './department-admin-new/department-admin-new.component';
import { DepartmentsAdminEditComponent } from './departments-admin-edit/departments-admin-edit.component';
import { DepartmentsAdminShellComponent } from './departments-admin-shell/departments-admin-shell.component';
import { DepartmentsAdminComponent } from './departments-admin/departments-admin.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DepartmentsRoutes),
    MaterialModule,
    SyncfusionGridModule,
    PipesModule,
    FormsModule,
    ControlsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
  ],
  declarations: [
    DepartmentsAdminShellComponent,
    DepartmentsAdminComponent,
    DepartmentAdminNewComponent,
    DepartmentsAdminEditComponent,
  ],
})
export class DepartmentsModule {}
