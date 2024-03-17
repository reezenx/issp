import { Component } from '@angular/core';
import { MaterialModule } from '@issp/common';
import { TablerIconsModule } from 'angular-tabler-icons';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [MaterialModule, TablerIconsModule],
  templateUrl: './payments.component.html',
})
export class AppPaymentsComponent {}
