import { Component } from '@angular/core';
import { MaterialModule } from '@issp/common';
import { TablerIconsModule } from 'angular-tabler-icons';

@Component({
  selector: 'issp-social-card',
  standalone: true,
  imports: [MaterialModule, TablerIconsModule],
  templateUrl: './social-card.component.html',
})
export class SocialCardComponent {}
