import { Component, ViewChild } from '@angular/core';
import { SyncfusionModule } from '../../../syncfusion.module';
import { FormsModule } from '@angular/forms';
import { ToolbarModule, TabModule } from '@syncfusion/ej2-angular-navigations';
import {
  DocumentEditorAllModule,
  DocumentEditorContainerAllModule,
  DocumentEditorContainerComponent,
  ToolbarService,
} from '@syncfusion/ej2-angular-documenteditor';
import {
  DropDownListModule,
  ComboBoxModule,
  DropDownListAllModule,
  MultiSelectAllModule,
} from '@syncfusion/ej2-angular-dropdowns';
import { ListViewAllModule } from '@syncfusion/ej2-angular-lists';
import {
  SliderModule,
  NumericTextBoxModule,
  ColorPickerModule,
} from '@syncfusion/ej2-angular-inputs';
import { CheckBoxModule, ButtonModule } from '@syncfusion/ej2-angular-buttons';
import {
  DropDownButtonModule,
  SplitButtonModule,
} from '@syncfusion/ej2-angular-splitbuttons';
import { DialogModule, TooltipModule } from '@syncfusion/ej2-angular-popups';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { TitleBar } from './title-bar';
import { defaultDocument } from './data';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-document',
  standalone: true,
  imports: [
    SyncfusionModule,
    FormsModule,
    ToolbarModule,
    DropDownListAllModule,
    ColorPickerModule,
    SplitButtonModule,
    ComboBoxModule,
    TabModule,
    DocumentEditorAllModule,
    DocumentEditorContainerAllModule,
    DropDownListModule,
    SliderModule,
    TooltipModule,
    NumericTextBoxModule,
    CheckBoxModule,
    ButtonModule,
    DropDownButtonModule,
    DialogModule,
    MultiSelectAllModule,
    ListViewAllModule,
    GridModule,
  ],
  templateUrl: './document.component.html',
  styleUrl: './document.component.scss',
  providers: [ToolbarService],
})
export class DocumentComponent {
  public hostUrl =
    'https://services.syncfusion.com/angular/production/api/documenteditor/';
  @ViewChild('documenteditor_default')
  public container: DocumentEditorContainerComponent;
  public culture = 'en-US';
  titleBar: TitleBar;

  onCreate(): void {
    // const titleBarElement: HTMLElement =
    //   document.getElementById('default_title_bar');
    // this.titleBar = new TitleBar(
    //   titleBarElement,
    //   this.container.documentEditor,
    //   true
    // );
    this.container.documentEditor.open(JSON.stringify(defaultDocument));
    this.container.documentEditor.documentName = 'Getting Started';
    this.titleBar.updateDocumentTitle();
  }

  onDocumentChange(): void {
    if (!isNullOrUndefined(this.titleBar)) {
      this.titleBar.updateDocumentTitle();
    }
    this.container.documentEditor.focusIn();
  }
}
