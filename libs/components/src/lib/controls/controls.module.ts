import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@issp/common/ui/libraries';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IsspYearPickerComponent } from './year-picker/year-picker.component';

@NgModule({
  declarations: [IsspYearPickerComponent],
  exports: [IsspYearPickerComponent],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
})
export class ControlsModule {}
