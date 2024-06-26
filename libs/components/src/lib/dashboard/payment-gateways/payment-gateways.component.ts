import { Component } from '@angular/core';
import { MaterialModule } from '@issp/common/ui/libraries';

interface stats {
  id: number;
  color: string;
  title: string;
  subtitle: string;
  img: string;
  percent: string;
}

@Component({
  selector: 'issp-payment-gateways',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './payment-gateways.component.html',
})
export class PaymentGatewaysComponent {
  stats: stats[] = [
    {
      id: 1,
      color: 'primary',
      title: 'GPay',
      subtitle: 'Transaction Payment',
      img: 'assets/images/svgs/icon-paypal.svg',
      percent: '6235',
    },
    {
      id: 2,
      color: 'success',
      title: 'Wallet',
      subtitle: 'Bills payment',
      img: 'assets/images/svgs/icon-office-bag.svg',
      percent: '345',
    },
    {
      id: 3,
      color: 'warning',
      title: 'Credit Card',
      subtitle: 'Money investment',
      img: 'assets/images/svgs/icon-master-card.svg',
      percent: '2235',
    },
    {
      id: 4,
      color: 'error',
      title: 'Refund',
      subtitle: 'Bills Payment',
      img: 'assets/images/svgs/icon-pie.svg',
      percent: '32',
    },
  ];
}
