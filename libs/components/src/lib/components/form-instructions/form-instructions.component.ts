import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'issp-form-instructions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-instructions.component.html',
  styleUrl: './form-instructions.component.scss',
})
export class FormInstructionsComponent {
  @Input()
  customClass = '';

  @Input()
  title = 'Fill-in Instructions:';

  @Input()
  items: string[] = [];
}
