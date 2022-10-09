import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { isPlatformBrowser } from '@angular/common';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-caracteristicas',
  templateUrl: './hazte-cliente.component.html',
  styleUrls: ['./hazte-cliente.component.css']
})
export class HazteClienteComponent implements OnInit {
  environment = environment;
  // host: string;
  fecha: any;
  ajuste: boolean;

  constructor(
    @Inject(PLATFORM_ID) public platformId: Object
    ) {
    this.fecha = new Date();
  }

  ngOnInit(): void {
    // this.host = window.location.hostname;

    if (this.fecha.toISOString().split('T')[0] > '2022-08-19') {
      this.ajuste = true;
    } else {
      this.ajuste = false;
    }
  }

  onDocument() {
    if(isPlatformBrowser(this.platformId)){
      window.open('https://labs-heybanco.herokuapp.com/assets/folletos/folleto-tarjetadecredito-parami.pdf');
    }
  }

}
