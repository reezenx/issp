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

import { ProjectImplTypesRoutes } from './project-impl-types.routes';
import { ProjectImplTypeAdminEditComponent } from './project-impl-type-admin-edit/project-impl-type-admin-edit.component';
import { ProjectImplTypeAdminNewComponent } from './project-impl-type-admin-new/project-impl-type-admin-new.component';
import { ProjectImplTypesAdminShellComponent } from './project-impl-types-admin-shell/project-impl-types-admin-shell.component';
import { ProjectImplTypesAdminComponent } from './project-impl-types-admin/project-impl-types-admin.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProjectImplTypesRoutes),
    MaterialModule,
    SyncfusionGridModule,
    PipesModule,
    FormsModule,
    ControlsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
  ],
  declarations: [
    ProjectImplTypeAdminEditComponent,
    ProjectImplTypeAdminNewComponent,
    ProjectImplTypesAdminComponent,
    ProjectImplTypesAdminShellComponent,
  ],
})
export class ProjectImplementationTypesModule {}
