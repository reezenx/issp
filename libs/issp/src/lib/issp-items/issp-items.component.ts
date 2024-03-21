import { GridDefaults } from '@issp/common/ui/libraries';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import {
  ExcelExportProperties,
  FilterSettingsModel,
  GridComponent,
  GroupSettingsModel,
  PageSettingsModel,
  PdfExportProperties,
  ResizeSettingsModel,
  ToolbarItems,
} from '@syncfusion/ej2-angular-grids';
import { ISSPDetails } from '../models/issp';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'issp-items',
  templateUrl: './issp-items.component.html',
  styleUrl: './issp-items.component.scss',
})
export class IsspItemsComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  // Grid
  @ViewChild('itemsGrid', { static: true })
  grid: GridComponent;
  gridId = 'itemsGrid';
  gridData: Array<ISSPDetails> = new Array<ISSPDetails>();
  gridPageSettings: PageSettingsModel = new GridDefaults();
  resizeSettings: ResizeSettingsModel = { mode: 'Normal' };
  filterSettings: FilterSettingsModel = { type: 'Excel' };
  sortOptions = { columns: [{ field: 'title', direction: 'Ascending' }] };
  toolbar: ToolbarItems[] = [
    'Print',
    'Search',
    'ExcelExport',
    'PdfExport',
    'ColumnChooser',
  ];
  groupOptions: GroupSettingsModel = {
    showDropArea: false,
  };
  loadingIndicator = { indicatorType: 'Shimmer' };

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ issps }) => {
      this.gridData = issps;
    });
  }

  toolbarClick(args: any) {
    if (args.item) {
      if (args.item.id === this.grid + '_excelexport') {
        const excelExportProperties: ExcelExportProperties = {
          includeHiddenColumn: true,
        };
        this.grid.excelExport(excelExportProperties);
      }
      if (args.item.id === this.grid + '_pdfexport') {
        const pdfExportProperties: PdfExportProperties = {
          includeHiddenColumn: true,
        };
        this.grid.pdfExport(pdfExportProperties);
      }
    }
  }
}
