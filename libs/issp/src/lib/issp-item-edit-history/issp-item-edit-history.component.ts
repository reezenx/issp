import {
  FilterSettingsModel,
  GridComponent,
  GroupSettingsModel,
  PageSettingsModel,
  PdfExportProperties,
  ResizeSettingsModel,
  ToolbarItems,
} from '@syncfusion/ej2-angular-grids';
import { ActivatedRoute, Router } from '@angular/router';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GridDefaults } from '@issp/common/ui/libraries';
import { ISSPDetails } from '../models/issp-details';
import { Subscription } from 'rxjs';
import { UntilDestroy } from '@ngneat/until-destroy';
import { ActionHistory } from '../models/action-history';

@UntilDestroy({ arrayName: 'subs' })
@Component({
  selector: 'issp-item-edit-history',
  templateUrl: './issp-item-edit-history.component.html',
  styleUrl: './issp-item-edit-history.component.scss',
})
export class IsspItemEditPreviewComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  // Grid
  @ViewChild('itemsGrid', { static: true })
  grid: GridComponent;
  gridId = 'itemsGrid';
  gridData: Array<ActionHistory> = new Array<ActionHistory>();
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

  subs: Subscription[] = [];

  ngOnInit() {
    this.initSubs();
  }

  initSubs() {
    const routeSub = this.route.data.subscribe(({ actionHistory }) => {
      this.gridData = actionHistory;
    });
    this.subs.push(routeSub);
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
