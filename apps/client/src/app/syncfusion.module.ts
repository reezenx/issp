import { NgModule } from '@angular/core';

// Syncfusion
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { DocumentEditorModule } from '@syncfusion/ej2-angular-documenteditor';

@NgModule({
  declarations: [],
  exports: [RichTextEditorModule, DocumentEditorModule],
})
export class SyncfusionModule {}
