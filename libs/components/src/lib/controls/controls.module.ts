import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@issp/common/ui/libraries';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { YearPickerControlComponent } from './year-picker-control/year-picker-control.component';
import { AgencyPickerControlComponent } from './agency-picker-control/agency-picker-control.component';

@NgModule({
  declarations: [YearPickerControlComponent, AgencyPickerControlComponent],
  exports: [AgencyPickerControlComponent, YearPickerControlComponent],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
})
export class ControlsModule {}
