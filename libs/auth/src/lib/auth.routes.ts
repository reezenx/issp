import { Routes } from '@angular/router';

import { IsspForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { IsspLoginComponent } from './components/login/login.component';
import { IsspRegisterComponent } from './components/register/register.component';
import { IsspTwoStepsComponent } from './components/two-steps/two-steps.component';
import { IsspErrorComponent } from './components/error/error.component';
import { IsspMaintenanceComponent } from './components/maintenance/maintenance.component';
import { AuthGuard } from './guards/auth.guard';

export const AuthRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'forgot-pwd',
        component: IsspForgotPasswordComponent,
        canActivate: [AuthGuard],
        data: {
          requireAuth: false,
        },
      },
      {
        path: 'login',
        component: IsspLoginComponent,
        canActivate: [AuthGuard],
        data: {
          requireAuth: false,
        },
      },
      {
        path: 'register',
        component: IsspRegisterComponent,
        canActivate: [AuthGuard],
        data: {
          requireAuth: false,
        },
      },
      {
        path: 'two-steps',
        component: IsspTwoStepsComponent,
        canActivate: [AuthGuard],
        data: {
          requireAuth: false,
        },
      },
      {
        path: 'error',
        component: IsspErrorComponent,
        canActivate: [AuthGuard],
        data: {
          requireAuth: false,
        },
      },
      {
        path: 'maintenance',
        component: IsspMaintenanceComponent,
        canActivate: [AuthGuard],
        data: {
          requireAuth: false,
        },
      },
    ],
  },
];
