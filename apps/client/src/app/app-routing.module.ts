import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from '@issp/components';
import { BlankComponent } from '@issp/components';

const routes: Routes = [
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
        loadChildren: () => import('@issp/auth').then((m) => m.AuthModule),
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
