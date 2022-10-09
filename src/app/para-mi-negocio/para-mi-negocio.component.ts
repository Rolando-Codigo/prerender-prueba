import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.prod';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-para-mi-negocio',
  templateUrl: './para-mi-negocio.component.html'
})
export class ParaMiNegocioComponent implements OnInit {

  environment = environment; 
  fecha: any;
  ajuste: boolean;

  constructor() {
    this.fecha = new Date();
  }

  ngOnInit() { 

    if (this.fecha.toISOString().split('T')[0] > '2022-08-19') {
      this.ajuste = true;
      // console.log('SI, ' + this.ajuste);
    } else {
      this.ajuste = false;
      // console.log('NO, ' + this.ajuste);
    }
  }

}
