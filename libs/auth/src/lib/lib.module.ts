import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { AuthRoutes } from './lib.routes';

import { IsspForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { IsspLoginComponent } from './login/login.component';
import { IsspRegisterComponent } from './register/register.component';
import { IsspTwoStepsComponent } from './two-steps/two-steps.component';
import { IsspErrorComponent } from './error/error.component';
import { IsspMaintenanceComponent } from './maintenance/maintenance.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthRoutes),
    IsspForgotPasswordComponent,
    IsspLoginComponent,
    IsspRegisterComponent,
    IsspTwoStepsComponent,
    IsspErrorComponent,
    IsspMaintenanceComponent,
  ],
})
export class AuthModule {}
