import { Route } from '@angular/router';
import { IsspItemsShellComponent } from './issp-items-shell/issp-items-shell.component';
import { IsspItemsComponent } from './issp-items/issp-items.component';
import { IsspItemNewComponent } from './issp-item-new/issp-item-new.component';
import { IsspItemComponent } from './issp-item/issp-item.component';
import { IsspItemEditMetadataComponent } from './issp-item-edit-metadata/issp-item-edit-metadata.component';
import { IsspItemEditDetailsComponent } from './issp-item-edit-details/issp-item-edit-details.component';
import { IsspItemEditPreviewComponent } from './issp-item-edit-preview/issp-item-edit-preview.component';

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
        resolve: {},
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
        resolve: {},
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
            path: 'preview',
            title: 'ISSP Preview',
            data: {
              breadcrumb: 'Preview',
            },
            component: IsspItemEditPreviewComponent,
          },
        ],
      },
    ],
  },
];
