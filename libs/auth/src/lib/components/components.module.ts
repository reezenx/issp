import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthComponentsRoutes } from './components.routes';

import { IsspForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { IsspLoginComponent } from './login/login.component';
import { IsspRegisterComponent } from './register/register.component';
import { IsspTwoStepsComponent } from './two-steps/two-steps.component';
import { IsspErrorComponent } from './error/error.component';
import { IsspMaintenanceComponent } from './maintenance/maintenance.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthComponentsRoutes),
    IsspForgotPasswordComponent,
    IsspLoginComponent,
    IsspRegisterComponent,
    IsspTwoStepsComponent,
    IsspErrorComponent,
    IsspMaintenanceComponent,
  ],
})
export class AuthComponentsModule {}
