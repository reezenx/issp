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

import { ProjectTypeGroupsRoutes } from './project-type-groups.routes';
import { ProjectTypeGroupAdminEditComponent } from './project-type-group-admin-edit/project-type-group-admin-edit.component';
import { ProjectTypeGroupAdminNewComponent } from './project-type-group-admin-new/project-type-group-admin-new.component';
import { ProjectTypeGroupsAdminShellComponent } from './project-type-groups-admin-shell/project-type-groups-shell.component';
import { ProjectTypeGroupsAdminComponent } from './project-type-groups-admin/project-type-groups-admin.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProjectTypeGroupsRoutes),
    MaterialModule,
    SyncfusionGridModule,
    PipesModule,
    FormsModule,
    ControlsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
  ],
  declarations: [
    ProjectTypeGroupsAdminComponent,
    ProjectTypeGroupAdminEditComponent,
    ProjectTypeGroupAdminNewComponent,
    ProjectTypeGroupsAdminShellComponent,
  ],
})
export class ProjectTypeGroupsModule {}
