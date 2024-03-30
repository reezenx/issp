import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from '@issp/components';
import { BlankComponent } from '@issp/components';
import { AuthGuard, AuthRoutes } from '@issp/auth';

const routes: Routes = [
  { path: '', redirectTo: 'user/account', pathMatch: 'full' },
  {
    path: '',
    component: FullComponent,
    data: {
      breadcrumbSkipNode: true,
    },
    canActivate: [AuthGuard],
    children: [
      {
        path: 'user',
        loadChildren: () => import('@issp/user').then((m) => m.UserModule),
        data: {
          breadcrumb: 'User',
        },
      },
      {
        path: 'admin',
        loadChildren: () => import('@issp/admin').then((m) => m.AdminModule),
        data: {
          breadcrumb: 'Admin',
        },
      },
    ],
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'auth',
        children: [...AuthRoutes],
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'auth/error',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
