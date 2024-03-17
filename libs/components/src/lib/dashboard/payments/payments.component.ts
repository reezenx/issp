import { Component } from '@angular/core';
import { MaterialModule } from '@issp/common/ui/libraries';
import { TablerIconsModule } from 'angular-tabler-icons';

@Component({
  selector: 'issp-payments',
  standalone: true,
  imports: [MaterialModule, TablerIconsModule],
  templateUrl: './payments.component.html',
})
export class PaymentsComponent {}
