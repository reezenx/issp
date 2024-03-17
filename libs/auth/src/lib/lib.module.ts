import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { FeatureAuthRoutes } from './lib.routes';

import { IsspForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { IsspLoginComponent } from './login/login.component';
import { IsspRegisterComponent } from './register/register.component';
import { IsspTwoStepsComponent } from './two-steps/two-steps.component';
import { IsspErrorComponent } from './error/error.component';
import { IsspMaintenanceComponent } from './maintenance/maintenance.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FeatureAuthRoutes),
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
    IsspForgotPasswordComponent,
    IsspLoginComponent,
    IsspRegisterComponent,
    IsspTwoStepsComponent,
    IsspErrorComponent,
    IsspMaintenanceComponent,
  ],
})
export class FeatureAuthModule {}
