import { Routes } from '@angular/router';

import { IsspForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { IsspLoginComponent } from './login/login.component';
import { IsspRegisterComponent } from './register/register.component';
import { IsspTwoStepsComponent } from './two-steps/two-steps.component';
import { IsspErrorComponent } from './error/error.component';
import { IsspMaintenanceComponent } from './maintenance/maintenance.component';

export const AuthRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'forgot-pwd',
        component: IsspForgotPasswordComponent,
      },
      {
        path: 'login',
        component: IsspLoginComponent,
      },
      {
        path: 'register',
        component: IsspRegisterComponent,
      },
      {
        path: 'two-steps',
        component: IsspTwoStepsComponent,
      },
      {
        path: 'error',
        component: IsspErrorComponent,
      },
      {
        path: 'maintenance',
        component: IsspMaintenanceComponent,
      },
    ],
  },
];
