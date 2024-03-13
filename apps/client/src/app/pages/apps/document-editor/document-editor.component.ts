import { Component } from '@angular/core';
import { RichtextComponent } from '../../../components/common/richtext/richtext.component';
import { MaterialModule } from '@issp/shared/ui/libraries';

@Component({
  selector: 'app-document-editor',
  standalone: true,
  imports: [MaterialModule, RichtextComponent],
  templateUrl: './document-editor.component.html',
  styleUrl: './document-editor.component.scss',
})
export class DocumentEditorComponent {}
