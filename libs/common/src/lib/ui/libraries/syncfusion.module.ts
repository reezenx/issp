import { NgModule } from '@angular/core';

// Syncfusion
import {
  // ResizeService,
  // ToolbarService,
  RichTextEditorModule,
} from '@syncfusion/ej2-angular-richtexteditor';
import { DocumentEditorModule } from '@syncfusion/ej2-angular-documenteditor';
import {
  ColumnChooserService,
  ColumnMenuService,
  CommandColumnService,
  EditService,
  ExcelExportService,
  FilterService,
  GridModule,
  GroupService,
  PageService,
  PdfExportService,
  SortService,
  ResizeService,
  ToolbarService,
} from '@syncfusion/ej2-angular-grids';

@NgModule({
  declarations: [],
  exports: [RichTextEditorModule, DocumentEditorModule, GridModule],
  providers: [
    ColumnChooserService,
    ColumnMenuService,
    CommandColumnService,
    EditService,
    ExcelExportService,
    FilterService,
    GroupService,
    PageService,
    PdfExportService,
    ResizeService,
    SortService,
    ToolbarService,
  ],
})
export class SyncfusionModule {}
