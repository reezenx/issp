import { Component } from '@angular/core';
import {
  CustomersComponent,
  EmployeeSalaryComponent,
  MonthlyEarningsComponent,
  ProductsComponent,
  ProjectsComponent,
  RevenueUpdatesComponent,
  SellingProductComponent,
  SocialCardComponent,
  TopCardsComponent,
  TopProjectsComponent,
  WeeklyStatsComponent,
  YearlyBreakupComponent,
} from '@issp/components';

@Component({
  selector: 'issp-user-account-dashboard',
  templateUrl: './user-account-dashboard.component.html',
  styleUrl: './user-account-dashboard.component.scss',
  standalone: true,
  imports: [
    CustomersComponent,
    EmployeeSalaryComponent,
    MonthlyEarningsComponent,
    ProductsComponent,
    ProjectsComponent,
    RevenueUpdatesComponent,
    SellingProductComponent,
    SocialCardComponent,
    TopCardsComponent,
    TopProjectsComponent,
    WeeklyStatsComponent,
    YearlyBreakupComponent,
  ],
})
export class UserAccountDashboardComponent {}
