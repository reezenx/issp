import { Route } from '@angular/router';
import { IsspItemsShellComponent } from './issp-items-shell/issp-items-shell.component';
import { IsspItemsComponent } from './issp-items/issp-items.component';
import { IsspItemNewComponent } from './issp-item-new/issp-item-new.component';
import { IsspItemEditShellComponent } from './issp-item-edit-shell/issp-item-edit-shell.component';
import { IsspItemEditMetadataComponent } from './issp-item-edit-metadata/issp-item-edit-metadata.component';
import { IsspItemEditDetailsComponent } from './issp-item-edit-details/issp-item-edit-details.component';
import { IsspItemEditPreviewComponent as IsspItemEditHistoryComponent } from './issp-item-edit-history/issp-item-edit-history.component';
import { isspsResolver } from './resolvers/issps.resolver';
import { isspResolver } from './resolvers/issp.resolver';
import { actionHistoryResolver } from './resolvers/action.history.resolver';

export const isspRoutes: Route[] = [
  {
    path: '',
    title: 'ISSP',
    component: IsspItemsShellComponent,
    data: {
      breadcrumbSkipNode: true,
    },
    children: [
      {
        path: '',
        title: 'ISSP Items',
        component: IsspItemsComponent,
        data: {
          breadcrumb: 'Items',
        },
        resolve: {
          items: isspsResolver,
        },
      },
      {
        path: 'new',
        title: 'New ISSP',
        component: IsspItemNewComponent,
        data: {
          breadcrumb: 'New',
        },
      },
      {
        path: ':id',
        title: 'ISSP',
        component: IsspItemEditShellComponent,
        data: {
          breadcrumbRouteDataProperty: 'item.title',
        },
        resolve: {
          item: isspResolver,
        },
        children: [
          {
            path: '',
            redirectTo: 'metadata',
            pathMatch: 'full',
          },
          {
            path: 'metadata',
            title: 'ISSP Metadata',
            data: {
              breadcrumbSkipNode: true,
            },
            component: IsspItemEditMetadataComponent,
          },
          {
            path: 'edit',

            title: 'ISSP Details',
            data: {
              breadcrumb: 'Details',
            },
            component: IsspItemEditDetailsComponent,
          },
          {
            path: 'history',
            title: 'ISSP History',
            data: {
              breadcrumb: 'History',
            },
            resolve: {
              items: actionHistoryResolver,
            },
            component: IsspItemEditHistoryComponent,
          },
        ],
      },
    ],
  },
];
