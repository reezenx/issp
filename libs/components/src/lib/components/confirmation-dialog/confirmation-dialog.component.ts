import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialModule } from '@issp/common/ui/libraries';

export class ConfirmationDialogComponentData {
  title = 'Confirmation required';
  message = 'Please confirm taking this action.';
  result = false;
  messageIsHtml = false;
  okOnly = false;
  showInputConfirmation = true;
  inputConfirmationText: string = null;
  inputValue: string = null;
  inputValidationValue: string = null;
  cancelBtnText = 'Cancel';
  okBtnText = 'Ok';
}

@Component({
  selector: 'issp-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
  standalone: true,
  imports: [CommonModule, MaterialModule, FormsModule],
})
export class ConfirmationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationDialogComponentData
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    this.data.result = true;
    this.dialogRef.close(this.data);
  }
}
