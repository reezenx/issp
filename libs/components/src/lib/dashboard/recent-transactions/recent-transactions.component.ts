import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MaterialModule } from '@issp/common/ui/libraries';

interface stats {
  id: number;
  time: string;
  color: string;
  title?: string;
  subtext?: string;
  link?: string;
}

@Component({
  selector: 'issp-recent-transactions',
  standalone: true,
  imports: [NgApexchartsModule, MaterialModule],
  templateUrl: './recent-transactions.component.html',
})
export class RecentTransactionsComponent {
  stats: stats[] = [
    {
      id: 1,
      time: '09.30 am',
      color: 'primary',
      subtext:
        'Inserted details PART I. ORGANIZATIONAL PROFILE - B. DEPARTMENT/AGENCY PROFILE',
    },
    {
      id: 2,
      time: '10.30 am',
      color: 'accent',
      title: 'Ammended PART IV. RESOURCE REQS',
      link: '#ISSP-3467',
    },
    {
      id: 3,
      time: '12.30 pm',
      color: 'success',
      subtext: 'Approved #ISSP-3467',
    },
    {
      id: 4,
      time: '12.30 pm',
      color: 'warning',
      title: 'New ISSP created',
      link: '#ISSP-3465',
    },
    {
      id: 5,
      time: '12.30 pm',
      color: 'error',
      title: 'New ISSP evaluation report',
      link: '#ISSP-3467',
    },
    {
      id: 6,
      time: '12.30 pm',
      color: 'success',
      subtext: '#ISSP-3467 endorsed',
    },
  ];
}
