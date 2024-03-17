import { Component } from '@angular/core';

// components
import { WelcomeCardComponent } from '@issp/components/dashboard';
import { PaymentsComponent } from '@issp/components/dashboard';
import { ProductsComponent } from '@issp/components/dashboard';
import { RevenueUpdatesTwoComponent } from '@issp/components/dashboard';
import { SalesOverviewComponent } from '@issp/components/dashboard';
import { TotalEarningsComponent } from '@issp/components/dashboard';
import { SalesProfitComponent } from '@issp/components/dashboard';
import { MonthlyEarningsTwoComponent } from '@issp/components/dashboard';
import { WeeklyStatsComponent } from '@issp/components/dashboard';
import { YearlySalesComponent } from '@issp/components/dashboard';
import { PaymentGatewaysComponent } from '@issp/components/dashboard';
import { RecentTransactionsComponent } from '@issp/components/dashboard';
import { ProductPerformanceComponent } from '@issp/components/dashboard';

@Component({
  selector: 'issp-dashboard',
  standalone: true,
  imports: [
    WelcomeCardComponent,
    PaymentsComponent,
    ProductsComponent,
    RevenueUpdatesTwoComponent,
    SalesOverviewComponent,
    TotalEarningsComponent,
    SalesProfitComponent,
    MonthlyEarningsTwoComponent,
    WeeklyStatsComponent,
    YearlySalesComponent,
    PaymentGatewaysComponent,
    RecentTransactionsComponent,
    ProductPerformanceComponent,
  ],
  templateUrl: './dashboard.component.html',
})
export class IsspDashboardComponent {
  // constructor() {}
}
