import { Component } from '@angular/core';
import { DiagramSimpleComponent } from '@issp/shared/ui/components';
import { MaterialModule } from '@issp/shared/ui/libraries';

@Component({
  selector: 'app-diagram',
  standalone: true,
  imports: [MaterialModule, DiagramSimpleComponent],
  templateUrl: './diagram.component.html',
  styleUrl: './diagram.component.scss',
})
export class DiagramComponent {}
