import { Routes } from '@angular/router';

import { AppKichenSinkComponent } from './kichen-sink/kichen-sink.component';

export const DatatablesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'projects',
        component: AppKichenSinkComponent,
        data: {
          title: 'Projects',
          urls: [
            { title: 'Dashboard', url: '/dashboards/dashboard1' },
            { title: 'Projects' },
          ],
        },
      },
    ],
  },
];
