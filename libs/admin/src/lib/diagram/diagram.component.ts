import { Component } from '@angular/core';
import { DiagramSimpleComponent } from '@issp/components';
import { MaterialModule } from '@issp/common/ui/libraries';

@Component({
  selector: 'issp-diagram',
  standalone: true,
  imports: [MaterialModule, DiagramSimpleComponent],
  templateUrl: './diagram.component.html',
  styleUrl: './diagram.component.scss',
})
export class DiagramComponent {}
