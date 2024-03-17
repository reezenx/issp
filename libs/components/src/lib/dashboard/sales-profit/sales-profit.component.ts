import { Component } from '@angular/core';
import { MaterialModule } from '@issp/common/ui/libraries';
import { TablerIconsModule } from 'angular-tabler-icons';

@Component({
  selector: 'issp-sales-profit',
  standalone: true,
  imports: [MaterialModule, TablerIconsModule],
  templateUrl: './sales-profit.component.html',
})
export class SalesProfitComponent {}
