import { Component, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-boletos-asignados-modal',
  templateUrl: './boletos-asignados-modal.component.html',
  styleUrls: ['./boletos-asignados-modal.component.css']
})
export class BoletosAsignadosModalComponent {

  @Input() idParticipacion: any;

  constructor(
    public dialogRef: MatDialogRef<BoletosAsignadosModalComponent>,
    @Inject(MAT_DIALOG_DATA) public config: any,
    ) { }

}
