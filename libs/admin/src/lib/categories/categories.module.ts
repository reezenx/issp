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

import { UsersRoutes } from './categories.routes';
import { CategoriesAdminShellComponent } from './categories-admin-shell/categories-admin-shell.component';
import { CategoriesAdminComponent } from './categories-admin/categories-admin.component';
import { CategoryAdminEditComponent } from './category-admin-edit/category-admin-edit.component';
import { CategoryAdminNewComponent } from './category-admin-new/category-admin-new.component';

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
    CategoriesAdminComponent,
    CategoriesAdminShellComponent,
    CategoryAdminEditComponent,
    CategoryAdminNewComponent,
  ],
})
export class CategoriesModule {}
