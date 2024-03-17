import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '@issp/common';

@Component({
  selector: 'app-starter',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StarterComponent {}
