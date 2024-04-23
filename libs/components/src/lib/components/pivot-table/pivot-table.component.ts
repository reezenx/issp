import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  Input,
} from '@angular/core';
import {
  IDataOptions,
  PivotView,
  FieldListService,
  CalculatedFieldService,
  ToolbarService,
  ConditionalFormattingService,
  ToolbarItems,
  DisplayOption,
  IDataSet,
  NumberFormattingService,
  PivotViewModule,
  IAxisSet,
  GroupingBarService,
  GroupingService,
  VirtualScrollService,
  DrillThroughService,
  QueryCellInfoEventArgs,
  PDFExportService,
  ExcelExportService,
  PivotChartService,
} from '@syncfusion/ej2-angular-pivotview';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';
import { enableRipple, createElement, select } from '@syncfusion/ej2-base';
import { ChartSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/chartsettings';
import { ILoadedEventArgs, ChartTheme } from '@syncfusion/ej2-charts';
import { ExcelQueryCellInfoEventArgs } from '@syncfusion/ej2-grids';
import { Observable } from 'rxjs';
enableRipple(false);

@Component({
  selector: 'issp-pivot-table',
  standalone: true,
  templateUrl: './pivot-table.component.html',
  styleUrl: './pivot-table.component.scss',
  providers: [
    CalculatedFieldService,
    ToolbarService,
    ConditionalFormattingService,
    FieldListService,
    NumberFormattingService,
    GroupingBarService,
    GroupingService,
    VirtualScrollService,
    DrillThroughService,
    PDFExportService,
    ExcelExportService,
    PivotChartService,
  ],
  imports: [PivotViewModule],
})
export class PivotTableComponent implements OnInit {
  public dataSourceSettings: IDataOptions;
  public gridSettings: GridSettings;
  public toolbarOptions: ToolbarItems[];
  public chartSettings: ChartSettings;
  public displayOption: DisplayOption;
  public observable = new Observable();

  @Input()
  data: IDataSet[];

  @ViewChild('pivotview')
  public pivotObj: PivotView;

  queryCell(args: QueryCellInfoEventArgs): void {
    (this.pivotObj.renderModule as any).rowCellBoundEvent(args);
    const cellInfo: IAxisSet = args.data[
      Number(args.cell.getAttribute('data-colindex'))
    ] as IAxisSet;
    if (
      cellInfo &&
      cellInfo.axis === 'value' &&
      this.pivotObj.pivotValues[cellInfo.rowIndex] &&
      (this.pivotObj.pivotValues[cellInfo.rowIndex][0] as IAxisSet).hasChild
    ) {
      if (args.cell.classList.contains(cellInfo.cssClass)) {
        args.cell.classList.remove(cellInfo.cssClass);
        cellInfo.style = undefined;
      }
    }
    if (
      cellInfo &&
      cellInfo.axis === 'row' &&
      cellInfo.valueSort.axis === 'agencyName'
    ) {
      // const imgElement: Element = createElement('img', {
      //   className: 'university-logo',
      //   attrs: {
      //     src: Universitydata[cellInfo.index[0]].logo as string,
      //     alt: cellInfo.formattedText as string,
      //     width: '0',
      //     height: '0',
      //   },
      // });
      // const cellValue: Element = select('.e-cellvalue', args.cell);
      // cellValue.classList.add('e-hyperlinkcell');
      // cellValue.addEventListener(
      //   'click',
      //   this.hyperlinkCellClick.bind(this.pivotObj)
      // );
      // args.cell.insertBefore(imgElement, cellValue);
    }
  }

  enginePopulated(): void {
    this.pivotObj.grid.queryCellInfo = this.queryCell.bind(this);
  }

  saveReport(args: any) {
    let reports = [];
    let isSaved = false;
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== '') {
      reports = JSON.parse(localStorage.pivotviewReports);
    }
    if (args.report && args.reportName && args.reportName !== '') {
      const report = JSON.parse(args.report);
      report.dataSourceSettings.dataSource = [];
      report.pivotValues = [];
      args.report = JSON.stringify(report);
      reports.map(function (item: any): any {
        if (args.reportName === item.reportName) {
          item.report = args.report;
          isSaved = true;
        }
      });
      if (!isSaved) {
        reports.push(args);
      }
      localStorage.pivotviewReports = JSON.stringify(reports);
    }
  }

  fetchReport(args: any) {
    let reportCollection: string[] = [];
    const reeportList: string[] = [];
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== '') {
      reportCollection = JSON.parse(localStorage.pivotviewReports);
    }
    reportCollection.map(function (item: any): void {
      reeportList.push(item.reportName);
    });
    args.reportName = reeportList;
  }

  loadReport(args: any) {
    let reportCollection: string[] = [];
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== '') {
      reportCollection = JSON.parse(localStorage.pivotviewReports);
    }
    reportCollection.map(function (item: any): void {
      if (args.reportName === item.reportName) {
        args.report = item.report;
      }
    });
    if (args.report) {
      const report = JSON.parse(args.report);
      report.dataSourceSettings.dataSource =
        this.pivotObj.dataSourceSettings.dataSource;
      this.pivotObj.dataSourceSettings = report.dataSourceSettings;
    }
  }

  removeReport(args: any) {
    let reportCollection: any[] = [];
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== '') {
      reportCollection = JSON.parse(localStorage.pivotviewReports);
    }
    for (let i = 0; i < reportCollection.length; i++) {
      if (reportCollection[i].reportName === args.reportName) {
        reportCollection.splice(i, 1);
      }
    }
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== '') {
      localStorage.pivotviewReports = JSON.stringify(reportCollection);
    }
  }

  renameReport(args: any) {
    let reportsCollection: any[] = [];
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== '') {
      reportsCollection = JSON.parse(localStorage.pivotviewReports);
    }
    if (args.isReportExists) {
      for (let i = 0; i < reportsCollection.length; i++) {
        if (reportsCollection[i].reportName === args.rename) {
          reportsCollection.splice(i, 1);
        }
      }
    }
    reportsCollection.map(function (item: any): any {
      if (args.reportName === item.reportName) {
        item.reportName = args.rename;
      }
    });
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== '') {
      localStorage.pivotviewReports = JSON.stringify(reportsCollection);
    }
  }

  newReport() {
    this.pivotObj.setProperties(
      {
        dataSourceSettings: {
          columns: [
            { name: 'typeName', caption: 'Project Type', expandAll: true },
          ],
          rows: [
            {
              name: 'departmentName',
              caption: 'Department',
              expandAll: true,
              allowDragAndDrop: true,
            },
            {
              name: 'agencyName',
              caption: 'Agency',
              expandAll: true,
              allowDragAndDrop: true,
            },
          ],
          values: [{ name: 'cost', caption: 'Cost' }],
          filters: [],
        },
      },
      false
    );
  }

  chartSeriesCreated() {
    this.pivotObj.chartSettings.chartSeries.legendShape =
      this.pivotObj.chartSettings.chartSeries.type === 'Polar'
        ? 'Rectangle'
        : 'SeriesType';
  }

  beforeToolbarRender(args: any) {
    args.customToolbar.splice(6, 0, {
      type: 'Separator',
    });
    args.customToolbar.splice(9, 0, {
      type: 'Separator',
    });
  }

  ngOnInit(): void {
    this.chartSettings = {
      title: 'Projects Analysis',
      chartSeries: { type: 'Column' },
      load: this.observable.subscribe((args) => {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        (args as ILoadedEventArgs).chart.theme = <ChartTheme>(
          (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1))
            .replace(/-dark/i, 'Dark')
            .replace(/contrast/i, 'Contrast')
        );
      }) as any,
    } as ChartSettings;

    this.displayOption = { view: 'Both' } as DisplayOption;
    this.gridSettings = {
      columnWidth: 150,
      allowSelection: true,
      rowHeight: 36,
      selectionSettings: {
        mode: 'Cell',
        type: 'Single',
        cellSelectionMode: 'Box',
      },
      excelQueryCellInfo: this.observable.subscribe((args) => {
        if (
          ((args as ExcelQueryCellInfoEventArgs).cell as IAxisSet).axis ===
            'value' &&
          ((args as ExcelQueryCellInfoEventArgs).cell as IAxisSet).value ===
            undefined
        ) {
          (args as ExcelQueryCellInfoEventArgs).style.numberFormat = undefined;
        }
      }) as any,
    } as GridSettings;

    this.toolbarOptions = [
      'New',
      'Save',
      'SaveAs',
      'Rename',
      'Remove',
      'Load',
      'Grid',
      'Chart',
      'Export',
      'SubTotal',
      'GrandTotal',
      'Formatting',
      'FieldList',
    ] as ToolbarItems[];

    this.dataSourceSettings = {
      enableSorting: true,
      columns: [
        { name: 'budgetTypeName', caption: 'Budget Type', expandAll: true },
        { name: 'budgetSourceName', caption: 'Budget Source', expandAll: true },
        { name: 'implementationTypeName', caption: 'Implementation Type' },
      ],
      rows: [
        {
          name: 'departmentName',
          caption: 'Department',
          expandAll: true,
          allowDragAndDrop: true,
        },
        {
          name: 'agencyName',
          caption: 'Agency',
          expandAll: true,
          allowDragAndDrop: true,
        },
        {
          name: 'categoryName',
          caption: 'Category',
          expandAll: true,
          allowDragAndDrop: true,
        },
      ],
      formatSettings: [{ name: 'cost', format: 'C2' }],
      // formatSettings: [{ name: 'cost', format: '₱ ###,###,###,###.##' }],
      dataSource: this.data,
      expandAll: false,
      values: [{ name: 'cost', caption: 'Cost' }],
      filters: [{ name: 'typeName', caption: 'Project Type' }],
      fieldMapping: [
        { name: 'agencyName', caption: 'Agency' },
        { name: 'departmentName', caption: 'Department' },
        { name: 'agencyCategoryName', caption: 'Agency Category' },
        { name: 'agencyName', caption: 'Agency' },
        { name: 'typeName', caption: 'Type' },
        { name: 'categoryName', caption: 'Category' },
        { name: 'budgetTypeName', caption: 'Budget Type' },
        { name: 'budgetSourceName', caption: 'Budget Source' },
        { name: 'implementationTypeName', caption: 'Implementation Type' },
        { name: 'isspName', caption: 'ISSP' },
        { name: 'unit', caption: 'Unit' },
        { name: 'quantity', caption: 'Quantity' },
        { name: 'department', caption: 'Department' },
      ],
      conditionalFormatSettings: [
        {
          measure: 'cost',
          value1: 1000000,
          value2: 100000000,
          conditions: 'Between',
          style: {
            backgroundColor: '#008000',
            color: 'white',
            fontFamily: 'Arial',
            fontSize: '14px',
          },
          applyGrandTotals: false,
        },
        {
          measure: 'cost',
          value1: 100000001,
          value2: 500000000,
          conditions: 'Between',
          style: {
            backgroundColor: '#0040e6',
            color: 'white',
            fontFamily: 'Arial',
            fontSize: '14px',
          },
          applyGrandTotals: false,
        },
        {
          measure: 'cost',
          value1: 500000001,
          value2: 9900000000,
          conditions: 'Between',
          style: {
            backgroundColor: '#E10000',
            color: 'white',
            fontFamily: 'Arial',
            fontSize: '14px',
          },
          applyGrandTotals: false,
        },
        {
          measure: 'cost',
          value1: 9900000000,
          conditions: 'GreaterThan',
          style: {
            backgroundColor: '#E10000',
            color: 'white',
            fontFamily: 'Arial',
            fontSize: '14px',
          },
          applyGrandTotals: false,
        },
      ],
      showHeaderWhenEmpty: false,
      emptyCellsTextContent: '-',
      excludeFields: [
        'updatedAt',
        '_updatedAt',
        'updatedBy',
        'createdBy',
        'createdAt',
        '_createdAt',
        'id',
        'title',
        'description',
        'tags',
        'readOnly',
        'typeId',
        'type',
        'implementationId',
        'implementation',
        'implementationTypeId',
        'implementationType',
        'categoryId',
        'category',
        'budgetTypeId',
        'budgetType',
        'budgetSourceId',
        'budgetSource',
        'agencyId',
        'agency',
        'isspId',
        'issp',
        'isspName',
      ],
    };
  }
}
