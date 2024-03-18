import { Component } from '@angular/core';

// components
import { WelcomeCardComponent } from '@issp/components';
import { PaymentsComponent } from '@issp/components';
import { ProductsComponent } from '@issp/components';
import { RevenueUpdatesTwoComponent } from '@issp/components';
import { SalesOverviewComponent } from '@issp/components';
import { TotalEarningsComponent } from '@issp/components';
import { SalesProfitComponent } from '@issp/components';
import { MonthlyEarningsTwoComponent } from '@issp/components';
import { WeeklyStatsComponent } from '@issp/components';
import { YearlySalesComponent } from '@issp/components';
import { PaymentGatewaysComponent } from '@issp/components';
import { RecentTransactionsComponent } from '@issp/components';
import { ProductPerformanceComponent } from '@issp/components';

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
