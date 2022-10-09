import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-giveaway-catar-modal',
  templateUrl: './giveaway-catar-modal.component.html',
  styleUrls: ['./giveaway-catar-modal.component.css']
})
export class GiveawayCatarModalComponent {

  @Input() idParticipacion;

  constructor(
    public dialogRef: MatDialogRef<GiveawayCatarModalComponent>,
    @Inject(MAT_DIALOG_DATA) public config: any,
    ) { }

}
