import { Component } from '@angular/core';
import { SyncfusionRichTextModule } from '@issp/common/ui/libraries';

@Component({
  selector: 'issp-richtext',
  standalone: true,
  imports: [SyncfusionRichTextModule],
  templateUrl: './richtext.component.html',
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
      'LowerCase',
      'UpperCase',
      '|',
      'OrderedList',
      'UnorderedList',
      '|',
      'Indent',
      'Outdent',
    ],
  };
  public iframe: object = { enable: true };
  public height = 'auto';
}
