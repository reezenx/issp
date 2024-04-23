import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MaterialModule,
  SyncfusionGridModule,
} from '@issp/common/ui/libraries';

import { isspRoutes } from './issp.routes';
import { IsspDetailsModule } from './issp-details/issp-details.module';

import { IsspItemEditShellComponent } from './issp-item-edit-shell/issp-item-edit-shell.component';
import { IsspItemEditDetailsComponent } from './issp-item-edit-details/issp-item-edit-details.component';
import { IsspItemEditMetadataComponent } from './issp-item-edit-metadata/issp-item-edit-metadata.component';
import { IsspItemNewComponent } from './issp-item-new/issp-item-new.component';
import { IsspItemEditPreviewComponent } from './issp-item-edit-history/issp-item-edit-history.component';
import { IsspItemsComponent } from './issp-items/issp-items.component';
import { IsspItemsShellComponent } from './issp-items-shell/issp-items-shell.component';
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import {
  ControlsModule,
  FormInstructionsComponent,
  RichtextComponent,
} from '@issp/components';
import { AppAbility, PipesModule } from '@issp/common';
import { PureAbility } from '@casl/ability';
import { AbilityService } from '@casl/angular';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(isspRoutes),
    TablerIconsModule.pick(TablerIcons),
    ControlsModule,
    MaterialModule,
    SyncfusionGridModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule,
    RichtextComponent,
    IsspDetailsModule,
    FormInstructionsComponent,
  ],
  declarations: [
    IsspItemEditShellComponent,
    IsspItemEditDetailsComponent,
    IsspItemEditMetadataComponent,
    IsspItemEditPreviewComponent,
    IsspItemNewComponent,
    IsspItemsComponent,
    IsspItemsShellComponent,
  ],
  providers: [
    { provide: AppAbility, useValue: new AppAbility() },
    { provide: PureAbility, useExisting: AppAbility },
    AbilityService,
  ],
})
export class IsspModule {}
