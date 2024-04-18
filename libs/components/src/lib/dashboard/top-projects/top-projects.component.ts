import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@issp/common';

export interface productsData {
  id: number;
  imagePath: string;
  uname: string;
  position: string;
  productName: string;
  budget: number;
  priority: string;
}

const ELEMENT_DATA: productsData[] = [
  {
    id: 1,
    imagePath: 'assets/images/profile/user-1.jpg',
    uname: 'Juan Dela Cruz',
    position: 'Planner',
    productName: 'Web Maintenance',
    budget: 3900,
    priority: 'low',
  },
  {
    id: 2,
    imagePath: 'assets/images/profile/user-2.jpg',
    uname: 'Andrew Reyes',
    position: 'Evaluator',
    productName: 'Cybersecurity',
    budget: 240.5,
    priority: 'medium',
  },
  {
    id: 3,
    imagePath: 'assets/images/profile/user-3.jpg',
    uname: 'Christopher Legazpi',
    position: 'Project Validator',
    productName: 'AWS Training',
    budget: 120.8,
    priority: 'high',
  },
  {
    id: 4,
    imagePath: 'assets/images/profile/user-4.jpg',
    uname: 'John Cena',
    position: 'Approver',
    productName: '50 Laptops and 100 Tablets',
    budget: 200.4,
    priority: 'critical',
  },
];

interface month {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'issp-top-projects',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './top-projects.component.html',
})
export class TopProjectsComponent {
  displayedColumns: string[] = ['assigned', 'name', 'priority', 'budget'];
  dataSource = ELEMENT_DATA;

  months: month[] = [
    { value: 'mar', viewValue: 'March 2023' },
    { value: 'apr', viewValue: 'April 2023' },
    { value: 'june', viewValue: 'June 2023' },
  ];
}
