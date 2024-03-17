import { Component } from '@angular/core';
import { RichtextComponent } from '@issp/components';
import { MaterialModule } from '@issp/common';

@Component({
  selector: 'app-document-editor',
  standalone: true,
  imports: [MaterialModule, RichtextComponent],
  templateUrl: './document-editor.component.html',
  styleUrl: './document-editor.component.scss',
})
export class DocumentEditorComponent {}
