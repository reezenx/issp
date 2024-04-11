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

import { UsersRoutes } from './project-categories.routes';
import { ProjectCategoriesAdminShellComponent } from './project-categories-admin-shell/project-categories-admin-shell.component';
import { ProjectCategoriesAdminComponent } from './project-categories-admin/project-categories-admin.component';
import { ProjectCategoryAdminEditComponent } from './project-category-admin-edit/project-category-admin-edit.component';
import { ProjectCategoryAdminNewComponent } from './project-category-admin-new/project-category-admin-new.component';

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
    ProjectCategoriesAdminShellComponent,
    ProjectCategoriesAdminComponent,
    ProjectCategoryAdminEditComponent,
    ProjectCategoryAdminNewComponent,
  ],
})
export class ProjectCategoriesModule {}
