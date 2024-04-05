import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MaterialModule,
  SyncfusionRichTextModule,
} from '@issp/common/ui/libraries';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { YearPickerControlComponent } from './year-picker-control/year-picker-control.component';
import { RichTextControlComponent } from './rich-text-control/rich-text-control.component';
import { ItemPickerControlComponent } from './item-picker-control/item-picker-control.component';

@NgModule({
  declarations: [
    YearPickerControlComponent,
    ItemPickerControlComponent,
    RichTextControlComponent,
  ],
  exports: [
    ItemPickerControlComponent,
    YearPickerControlComponent,
    RichTextControlComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SyncfusionRichTextModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ControlsModule {}
