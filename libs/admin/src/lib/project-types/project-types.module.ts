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

import { ProjectTypesRoutes } from './project-types.routes';
import { ProjectTypeAdminEditComponent } from './project-type-admin-edit/project-type-admin-edit.component';
import { ProjectTypeAdminNewComponent } from './project-type-admin-new/project-type-admin-new.component';
import { ProjectTypesAdminComponent } from './project-types-admin/project-types-admin.component';
import { ProjectTypeAdminShellComponent } from './project-types-admin-shell/project-types-admin-shell.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProjectTypesRoutes),
    MaterialModule,
    SyncfusionGridModule,
    PipesModule,
    FormsModule,
    ControlsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
  ],
  declarations: [
    ProjectTypeAdminEditComponent,
    ProjectTypeAdminNewComponent,
    ProjectTypesAdminComponent,
    ProjectTypeAdminShellComponent,
  ],
})
export class ProjectTypesModule {}
