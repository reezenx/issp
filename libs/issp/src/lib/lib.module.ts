import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule, SyncfusionModule } from '@issp/common/ui/libraries';

import { isspRoutes } from './lib.routes';

import { IsspItemComponent } from './issp-item/issp-item.component';
import { IsspItemEditDetailsComponent } from './issp-item-edit-details/issp-item-edit-details.component';
import { IsspItemEditMetadataComponent } from './issp-item-edit-metadata/issp-item-edit-metadata.component';
import { IsspItemNewComponent } from './issp-item-new/issp-item-new.component';
import { IsspItemEditPreviewComponent } from './issp-item-edit-history/issp-item-edit-history.component';
import { IsspItemsComponent } from './issp-items/issp-items.component';
import { IsspItemsShellComponent } from './issp-items-shell/issp-items-shell.component';
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { ControlsModule, RichtextComponent } from '@issp/components';
import { PipesModule } from '@issp/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(isspRoutes),
    TablerIconsModule.pick(TablerIcons),
    ControlsModule,
    MaterialModule,
    SyncfusionModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule,
    RichtextComponent,
  ],
  declarations: [
    IsspItemComponent,
    IsspItemEditDetailsComponent,
    IsspItemEditMetadataComponent,
    IsspItemEditPreviewComponent,
    IsspItemNewComponent,
    IsspItemsComponent,
    IsspItemsShellComponent,
  ],
})
export class IsspModule {}
