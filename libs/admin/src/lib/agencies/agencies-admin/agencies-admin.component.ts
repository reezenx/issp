import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UntilDestroy } from "@ngneat/until-destroy";
import { FilterSettingsModel, GridComponent, GroupSettingsModel, PageSettingsModel, PdfExportProperties, ResizeSettingsModel, ToolbarItems } from "@syncfusion/ej2-angular-grids";
import { AgencyDetails } from "../models/agency-details";
import { GridDefaults } from "@issp/common/ui/libraries";
import { Subscription } from "rxjs";
import { ClickEventArgs } from "@syncfusion/ej2-navigations";

@UntilDestroy({ arrayName: 'subs' })
@Component({
  selector: 'issp-agencies-admin',
  templateUrl: './agencies-admin.component.html',
  styleUrl: './agencies-admin.component.scss',
})
export class AgenciesAdminComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  // Grid
  @ViewChild('itemsGrid', { static: true })
  grid: GridComponent;
  gridId = 'itemsGrid';
  gridData: Array<AgencyDetails> = new Array<AgencyDetails>();
  gridPageSettings: PageSettingsModel = new GridDefaults();
  resizeSettings: ResizeSettingsModel = { mode: 'Normal' };
  filterSettings: FilterSettingsModel = { type: 'Excel' };
  sortSettings = { columns: [{ field: 'createdAt', direction: 'Descending' }] };
  toolbar: ToolbarItems[] = [
    'Print',
    'Search',
    'ExcelExport',
    'PdfExport',
    'ColumnChooser',
  ];
  groupSettings: GroupSettingsModel = {
    showDropArea: false,
  };
  loadingIndicator = { indicatorType: 'Shimmer' };

  subs: Subscription[] = [];

  ngOnInit() {
    this.initSubs();
  }

  initSubs() {
    const routeSub = this.route.data.subscribe(({ agencies }) => {
      this.gridData = agencies;
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

  addNew() {
    this.router.navigate(['./new'], { relativeTo: this.route });
  }

  created(): void {
    (
      document.getElementById(this.gridId + '_searchbar') as Element
    ).addEventListener('keyup', () => {
      (this.grid as GridComponent).search(
        ((event as MouseEvent).target as HTMLInputElement).value
      );
    });
  }

  editItem(id: string) {
    this.router.navigate(['./', id], { relativeTo: this.route });
  }
}
