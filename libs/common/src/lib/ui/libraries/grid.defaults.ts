import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';

export class GridDefaults implements PageSettingsModel {
  constructor(key?: string, value?: Array<string | number> | number) {
    if (key && value) {
      this[key] = value;
    }
  }

  [key: string]: Array<string | number> | number;
  pageSizes: [number, number, number, number, number, string] = [
    5,
    10,
    25,
    50,
    100,
    'All',
  ];
  pageSize = 25;
  pageCount = 5;
  xsmallPageSize = 10;
  smallPageSize = 10;
  mediumPageSize = 25;
  largePageSize = 50;
  xlargePageSize = 100;
}
