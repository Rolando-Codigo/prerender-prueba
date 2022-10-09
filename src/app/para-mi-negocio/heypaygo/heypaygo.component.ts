import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-paygo',
  templateUrl: './heypaygo.component.html'
})
export class HeyPayGoComponent implements OnInit {

  environment = environment; 
  fecha: any;
  ajuste: boolean;

  constructor() {
    this.fecha = new Date();
   }

  ngOnInit() { 

    if (this.fecha.toISOString().split('T')[0] > '2022-08-19') {
      this.ajuste = true;
    } else {
      this.ajuste = false;
    }
  }

}
