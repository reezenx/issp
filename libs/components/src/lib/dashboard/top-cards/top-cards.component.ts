import { Component } from '@angular/core';
import { MaterialModule } from '@issp/common';

interface topcards {
  id: number;
  img: string;
  color: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'issp-top-cards',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './top-cards.component.html',
})
export class TopCardsComponent {
  topcards: topcards[] = [
    {
      id: 2,
      color: 'warning',
      img: '/assets/images/svgs/icon-briefcase.svg',
      title: 'ISSPs',
      subtitle: '5',
    },
    {
      id: 3,
      color: 'accent',
      img: '/assets/images/svgs/icon-mailbox.svg',
      title: 'Projects',
      subtitle: '356',
    },
    {
      id: 4,
      color: 'error',
      img: '/assets/images/svgs/icon-favorites.svg',
      title: 'Tier 1',
      subtitle: '300',
    },
    {
      id: 5,
      color: 'success',
      img: '/assets/images/svgs/icon-speech-bubble.svg',
      title: 'Tier 2',
      subtitle: '56',
    },
    {
      id: 6,
      color: 'accent',
      img: '/assets/images/svgs/icon-connect.svg',
      title: 'Reports',
      subtitle: '59',
    },
    {
      id: 1,
      color: 'primary',
      img: '/assets/images/svgs/icon-user-male.svg',
      title: 'Employees',
      subtitle: '1576',
    },
  ];
}
