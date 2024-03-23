import { NgModule } from '@angular/core';
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
  exports: [GridModule],
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
export class SyncfusionGridModule {}
