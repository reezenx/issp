import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MaterialModule,
  SyncfusionGridModule,
} from '@issp/common/ui/libraries';
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { AdminRoutes } from './admin.routes';
import { ControlsModule, PivotTableComponent } from '@issp/components';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PipesModule } from '@issp/common';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    MaterialModule,
    SyncfusionGridModule,
    PipesModule,
    FormsModule,
    ControlsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
    PivotTableComponent,
    DashboardComponent,
  ],
  declarations: [ReportsComponent],
  providers: [DatePipe],
})
export class AdminModule {}
