import { Route } from '@angular/router';
import { IsspItemsShellComponent } from './issp-items-shell/issp-items-shell.component';
import { IsspItemsComponent } from './issp-items/issp-items.component';
import { IsspItemNewComponent } from './issp-item-new/issp-item-new.component';
import { IsspItemComponent } from './issp-item/issp-item.component';
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
      title: 'ISSP',
    },
    children: [
      {
        path: '',
        title: 'ISSP Items',
        component: IsspItemsComponent,
        data: {
          breadcrumbSkipNode: true,
        },
        resolve: {
          issps: isspsResolver,
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
        data: {
          // breadcrumbRouteDataProperty: 'xform.name',
        },
        component: IsspItemComponent,
        resolve: {
          issp: isspResolver,
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
              breadcrumb: 'Metadata',
            },
            component: IsspItemEditMetadataComponent,
          },
          {
            path: 'edit',

            title: 'ISSP Details',
            data: {
              breadcrumb: 'Edit',
            },
            component: IsspItemEditDetailsComponent,
          },
          {
            path: 'history',
            title: 'IsSSP History',
            data: {
              breadcrumb: 'History',
            },
            resolve: {
              actionHistory: actionHistoryResolver,
            },
            component: IsspItemEditHistoryComponent,
          },
        ],
      },
    ],
  },
];
