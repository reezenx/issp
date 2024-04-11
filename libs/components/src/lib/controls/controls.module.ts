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
import { PipesModule } from '@issp/common';
import { SentenceCasePipe } from 'libs/common/src/lib/ui/pipes/sentence-case.pipe';
import { TagsControlComponent } from './tags-control/tags-control.component';
import { TablerIconsModule } from 'angular-tabler-icons';

@NgModule({
  declarations: [
    YearPickerControlComponent,
    ItemPickerControlComponent,
    RichTextControlComponent,
    TagsControlComponent,
  ],
  exports: [
    ItemPickerControlComponent,
    YearPickerControlComponent,
    RichTextControlComponent,
    TagsControlComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SyncfusionRichTextModule,
    FormsModule,
    PipesModule,
    ReactiveFormsModule,
    TablerIconsModule,
  ],
  providers: [SentenceCasePipe],
})
export class ControlsModule {}
