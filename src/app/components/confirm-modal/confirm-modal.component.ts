import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmModalComponent>,
    @Inject(MAT_DIALOG_DATA) public config: ModalConfig,
    ) { }

}

export interface ModalConfig {
  title?: string;
  message?: string;
  textBtnConfirm?: string | 'aceptarrrr';
  width?: string | '600px';
  hiddenCancel?: boolean | true;
}
