import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MaterialModule } from '@issp/common/ui/libraries';
import { TablerIconsModule } from 'angular-tabler-icons';
import { CommonModule } from '@angular/common';

export interface performanceData {
  id: number;
  pname: string;
  category: string;
  progress: number;
  sales: number;
  status: string;
}

const ELEMENT_DATA: performanceData[] = [
  {
    id: 1,
    pname: 'Data Center Lease',
    category: 'Rent/Lease Expenses',
    progress: 78.5,
    sales: 3456.9,
    status: 'low',
  },
  {
    id: 2,
    pname: 'AWS RDS',
    category: 'Subscription Expenses',
    progress: 58.6,
    sales: 367.5,
    status: 'medium',
  },
  {
    id: 3,
    pname: 'VOOP Integration and Support',
    category: 'Communication Expenses',
    progress: 25,
    sales: 300.8,
    status: 'high',
  },
  {
    id: 4,
    pname: 'Bataan Data Center',
    category: 'Infrastructure Outlay',
    progress: 96.3,
    sales: 31278.54,
    status: 'critical',
  },
];

interface month {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'issp-product-performance',
  standalone: true,
  imports: [
    NgApexchartsModule,
    MaterialModule,
    TablerIconsModule,
    CommonModule,
  ],
  templateUrl: './product-performance.component.html',
})
export class ProductPerformanceComponent {
  displayedColumns: string[] = ['product', 'progress', 'status', 'sales'];
  dataSource = ELEMENT_DATA;

  months: month[] = [
    { value: 'mar', viewValue: 'March 2023' },
    { value: 'apr', viewValue: 'April 2023' },
    { value: 'june', viewValue: 'June 2023' },
  ];
}
