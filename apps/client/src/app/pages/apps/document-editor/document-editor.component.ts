import { Component } from '@angular/core';
import { RichtextComponent } from '../../../components/common/richtext/richtext.component';

@Component({
  selector: 'app-document-editor',
  standalone: true,
  imports: [RichtextComponent],
  templateUrl: './document-editor.component.html',
  styleUrl: './document-editor.component.scss',
})
export class DocumentEditorComponent {}
