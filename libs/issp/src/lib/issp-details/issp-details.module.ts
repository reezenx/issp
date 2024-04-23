import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { P1OrgProfileS1FormComponent } from './p1-org-profile-s1-form/p1-org-profile-s1-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule, PipesModule } from '@issp/common';
import { ControlsModule, RichtextComponent } from '@issp/components';
import * as TablerIcons from 'angular-tabler-icons/icons';

@NgModule({
  declarations: [P1OrgProfileS1FormComponent],
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
  exports: [P1OrgProfileS1FormComponent],
})
export class IsspDetailsModule {}
