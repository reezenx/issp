import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule, PipesModule } from '@issp/common';
import { ControlsModule, RichtextComponent } from '@issp/components';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { P1OrgProfileS1FormComponent } from './p1-org-profile-s1-form/p1-org-profile-s1-form.component';
import { P1OrgProfileS2FormComponent } from './p1-org-profile-s2-form/p1-org-profile-s2-form.component';

@NgModule({
  declarations: [P1OrgProfileS1FormComponent, P1OrgProfileS2FormComponent],
  imports: [
    CommonModule,
    TablerIconsModule.pick(TablerIcons),
    MaterialModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule,
    ControlsModule,
    RichtextComponent,
  ],
  exports: [P1OrgProfileS1FormComponent, P1OrgProfileS2FormComponent],
})
export class IsspDetailsModule {}
