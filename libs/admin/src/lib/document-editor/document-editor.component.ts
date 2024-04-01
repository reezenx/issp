import { Component } from '@angular/core';
import { RichtextComponent } from '@issp/components';
import { MaterialModule } from '@issp/common/ui/libraries';

@Component({
  selector: 'issp-document-editor',
  standalone: true,
  imports: [MaterialModule, RichtextComponent],
  templateUrl: './document-editor.component.html',
  styleUrl: './document-editor.component.scss',
})
export class DocumentEditorComponent {}
