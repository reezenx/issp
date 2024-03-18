import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from '@issp/components';
import { BlankComponent } from '@issp/components';
import { AuthRoutes } from '@issp/auth';

const routes: Routes = [
  { path: '', redirectTo: 'user/account', pathMatch: 'full' },
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: 'user',
        loadChildren: () => import('@issp/user').then((m) => m.UserModule),
      },
      {
        path: 'admin',
        loadChildren: () => import('@issp/admin').then((m) => m.AdminModule),
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
