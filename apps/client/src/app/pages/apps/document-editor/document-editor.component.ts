import { Component } from '@angular/core';
import { RichtextComponent } from '../../../components/common/richtext/richtext.component';
import { MaterialModule } from '../../../material.module';
import { DocumentComponent } from '../../../components/common/document/document.component';

@Component({
  selector: 'app-document-editor',
  standalone: true,
  imports: [MaterialModule, RichtextComponent, DocumentComponent],
  templateUrl: './document-editor.component.html',
  styleUrl: './document-editor.component.scss',
})
export class DocumentEditorComponent {}
