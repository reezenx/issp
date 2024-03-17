import { Component } from '@angular/core';
import { MaterialModule } from '@issp/common/ui/libraries';

@Component({
  selector: 'issp-welcome-card',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './welcome-card.component.html',
})
export class WelcomeCardComponent {}
