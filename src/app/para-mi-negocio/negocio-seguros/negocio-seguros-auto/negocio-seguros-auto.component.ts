import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-seguros-auto',
  templateUrl: './negocio-seguros-auto.component.html'
})
export class NegocioSegurosAutoComponent implements OnInit {

  environment = environment;
  host: string;
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
