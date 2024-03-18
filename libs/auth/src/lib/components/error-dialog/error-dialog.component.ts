import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialModule } from '@issp/common/ui/libraries';

export interface ErrorDialogData {
  title: string;
  message: string | string[];
}

@Component({
  standalone: true,
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss'],
  imports: [MaterialModule, CommonModule],
})
export class ErrorDialogComponent {
  title: ErrorDialogData['title'];
  message: ErrorDialogData['message'];

  constructor(@Inject(MAT_DIALOG_DATA) data: ErrorDialogData) {
    this.title = data.title || 'Error';
    this.message =
      data.message instanceof Array ? data.message : [data.message || ''];
  }
}
