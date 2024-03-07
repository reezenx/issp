import { Component } from '@angular/core';
import { SyncfusionModule } from '../../../syncfusion.module';
import {
  HtmlEditorService,
  ImageService,
  LinkService,
  ToolbarService,
} from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-richtext',
  standalone: true,
  imports: [SyncfusionModule],
  templateUrl: './richtext.component.html',
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService],
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
      '|',
      'FontName',
      'FontSize',
      'FontColor',
      'BackgroundColor',
      '|',
      'SubScript',
      'SuperScript',
      '|',
      'LowerCase',
      'UpperCase',
      '|',
      'Formats',
      'Alignments',
      '|',
      'OrderedList',
      'UnorderedList',
      '|',
      'Indent',
      'Outdent',
      '|',
      'CreateLink',
      'Image',
      '|',
      'ClearFormat',
      'Print',
      'SourceCode',
      '|',
      'FullScreen',
    ],
  };
  public iframe: object = { enable: true };
  public height = 500;
}
