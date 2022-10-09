import { Meta, Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { CookieServices } from '../../../../services/cookie.service';
import { environment } from '../../../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-seguros-auto',
  templateUrl: './seguros-auto.component.html'
})
export class SegurosAutoComponent implements OnInit {
  cookie: string;
  environment = environment;
  // host: string;
  fecha: any;
  ajuste: boolean;

  constructor(private _cookieService: CookieServices, private title: Title, private meta: Meta) {
    this.fecha = new Date();
   }

  ngOnInit() {
    // this.host = window.location.hostname;
    if (this.fecha.toISOString().split('T')[0] > '2022-08-19') {
      this.ajuste = true;
      // console.log('SI, ' + this.ajuste);
    } else {
      this.ajuste = false;
      // console.log('NO, ' + this.ajuste);
    }

    this.cookie = this._cookieService.galletota;
    this.title.setTitle('Seguro de Auto Hey | Hey Banco');
    this.meta.updateTag({ name: 'description', content: 'El seguro de auto que te recompensa. Con tu seguro de Auto Hey nunca tienes pérdidas.'});
  }
}
