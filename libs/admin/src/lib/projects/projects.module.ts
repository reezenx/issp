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

import { ProjectsRoutes } from './projects.routes';
import { ProjectsAdminEditComponent } from './projects-admin-edit/projects-admin-edit.component';
import { ProjectsAdminNewComponent } from './projects-admin-new/projects-admin-new.component';
import { ProjectsAdminShellComponent } from './projects-admin-shell/projects-admin-shell.component';
import { ProjectsAdminComponent } from './projects-admin/projects-admin.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProjectsRoutes),
    MaterialModule,
    SyncfusionGridModule,
    PipesModule,
    FormsModule,
    ControlsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
  ],
  declarations: [
    ProjectsAdminComponent,
    ProjectsAdminEditComponent,
    ProjectsAdminNewComponent,
    ProjectsAdminShellComponent,
  ],
})
export class ProjectsModule {}
