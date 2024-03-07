import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

import { NgxPaginationModule } from 'ngx-pagination';
import { NgScrollbarModule } from 'ngx-scrollbar';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { AppKichenSinkComponent } from './kichen-sink/kichen-sink.component';
import { AppKichenSinkDialogContentComponent } from './kichen-sink/kichen-sink.component';
import { AppAddKichenSinkComponent } from './kichen-sink/add/add.component';

import { DatatablesRoutes } from './datatable.routing';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DatatablesRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
    NgxPaginationModule,
    MatNativeDateModule,
    NgScrollbarModule,
  ],
  exports: [TablerIconsModule],
  declarations: [
    AppKichenSinkComponent,
    AppKichenSinkDialogContentComponent,
    AppAddKichenSinkComponent,
  ],
  providers: [DatePipe],
})
export class DatatableModule {}
