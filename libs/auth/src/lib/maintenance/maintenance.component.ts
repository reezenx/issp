import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@issp/common';

@Component({
  selector: 'issp-maintenance',
  standalone: true,
  imports: [RouterModule, MaterialModule],
  templateUrl: './maintenance.component.html',
})
export class IsspMaintenanceComponent {}
