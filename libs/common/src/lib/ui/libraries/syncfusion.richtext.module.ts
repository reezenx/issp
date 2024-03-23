import { NgModule } from '@angular/core';

import {
  HtmlEditorService,
  ImageService,
  LinkService,
  QuickToolbarService,
  ResizeService,
  RichTextEditorModule,
  TableService,
  ToolbarService,
} from '@syncfusion/ej2-angular-richtexteditor';

@NgModule({
  declarations: [],
  exports: [RichTextEditorModule],
  providers: [
    ToolbarService,
    QuickToolbarService,
    ResizeService,
    LinkService,
    ImageService,
    HtmlEditorService,
    TableService,
  ],
})
export class SyncfusionRichTextModule {}
