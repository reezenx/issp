import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablerIconsModule } from 'angular-tabler-icons';
import {
  MaterialModule,
  PipesModule,
  SyncfusionGridModule,
} from '@issp/common';
import {
  ControlsModule,
  DiagramSimpleComponent,
  RichtextComponent,
} from '@issp/components';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { P1OrgProfileS1FormComponent } from './p1-org-profile-s1-form/p1-org-profile-s1-form.component';
import { P1OrgProfileS2FormComponent } from './p1-org-profile-s2-form/p1-org-profile-s2-form.component';
import { P1OrgProfileS3FormComponent } from './p1-org-profile-s3-form/p1-org-profile-s3-form.component';

@NgModule({
  declarations: [
    P1OrgProfileS1FormComponent,
    P1OrgProfileS2FormComponent,
    P1OrgProfileS3FormComponent,
  ],
  imports: [
    CommonModule,
    TablerIconsModule.pick(TablerIcons),
    MaterialModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule,
    ControlsModule,
    RichtextComponent,
    SyncfusionGridModule,
    DiagramSimpleComponent,
  ],
  exports: [
    P1OrgProfileS1FormComponent,
    P1OrgProfileS2FormComponent,
    P1OrgProfileS3FormComponent,
  ],
})
export class IsspDetailsModule {}
