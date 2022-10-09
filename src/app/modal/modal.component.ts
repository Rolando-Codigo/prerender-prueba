import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent {

  constructor(private modal: NgbModal) { }

openCentrado(contenido) {
  this.modal.open(contenido, {centered: true});
}

}







