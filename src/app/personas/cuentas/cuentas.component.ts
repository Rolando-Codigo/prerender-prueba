import { Meta, Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { CookieServices } from './../../services/cookie.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-cuentas',
  templateUrl: './cuentas.component.html'
})
export class CuentasComponent implements OnInit {
  cookie: string;
  environment = environment;
  constructor(private _cookieService: CookieServices, private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.cookie = this._cookieService.galletota;
    this.title.setTitle('Cuenta Hey | Hey Banco');
    this.meta.updateTag({ name: 'description', content: 'Con tu banco digital despídete de anualidades, las letras chiquitas y los trámites extra.'});
  }
}
