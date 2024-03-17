import { Component } from '@angular/core';
import { SyncfusionModule } from '@issp/common/ui/libraries';
import {
  HtmlEditorService,
  ImageService,
  LinkService,
  TableService,
  ToolbarService,
} from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'issp-richtext',
  standalone: true,
  imports: [SyncfusionModule],
  templateUrl: './richtext.component.html',
  providers: [
    ToolbarService,
    LinkService,
    ImageService,
    HtmlEditorService,
    TableService,
  ],
})
export class RichtextComponent {
  public tools: object = {
    items: [
      'Undo',
      'Redo',
      '|',
      'Bold',
      'Italic',
      'Underline',
      'StrikeThrough',
      // '|',
      // 'FontName',
      // 'FontSize',
      // 'FontColor',
      // 'BackgroundColor',
      // '|',
      // 'SubScript',
      // 'SuperScript',
      '|',
      'LowerCase',
      'UpperCase',
      // '|',
      // 'Formats',
      // 'Alignments',
      '|',
      'OrderedList',
      'UnorderedList',
      '|',
      'Indent',
      'Outdent',
      // '|',
      // 'CreateLink',
      // 'Image',
      // 'CreateTable',
      // '|',
      // 'ClearFormat',
      // 'Print',
      // 'SourceCode',
      // '|',
      // 'FullScreen',
    ],
  };
  public iframe: object = { enable: true };
  public height = 'auto';
}
