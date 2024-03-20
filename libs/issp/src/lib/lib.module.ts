import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@issp/common/ui/libraries';

import { isspRoutes } from './lib.routes';

import { IsspItemComponent } from './issp-item/issp-item.component';
import { IsspItemEditDetailsComponent } from './issp-item-edit-details/issp-item-edit-details.component';
import { IsspItemEditMetadataComponent } from './issp-item-edit-metadata/issp-item-edit-metadata.component';
import { IsspItemNewComponent } from './issp-item-new/issp-item-new.component';
import { IsspItemEditPreviewComponent } from './issp-item-edit-preview/issp-item-edit-preview.component';
import { IsspItemsComponent } from './issp-items/issp-items.component';
import { IsspItemsShellComponent } from './issp-items-shell/issp-items-shell.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(isspRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
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
