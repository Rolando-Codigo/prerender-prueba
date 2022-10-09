import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfig, ConfirmModalComponent } from './confirm-modal.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmModalService {

  constructor(
    private dialog: MatDialog
  ) { }

  showModal(config: ModalConfig): Observable<any> {
    const dialog = this.dialog.open( ConfirmModalComponent, {
      data: config,
      width: config.width || '400px'
    });

    return dialog.afterClosed();
  }
}
