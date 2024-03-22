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
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

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

  toolbarClick(args: ClickEventArgs) {
    if (args.item) {
      if (args.item.id === this.gridId + '_excelexport') {
        (this.grid as GridComponent).excelExport();
      }
      if (args.item.id === this.gridId + '_pdfexport') {
        const pdfExportProperties: PdfExportProperties = {
          exportType: 'CurrentPage',
          allowHorizontalOverflow: true,
          pageOrientation:
            'Landscape' as PdfExportProperties['pageOrientation'],
        };
        (this.grid as GridComponent).pdfExport(pdfExportProperties);
      }
    }
  }
}
