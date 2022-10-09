import { Meta, Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { CookieServices } from './../../services/cookie.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-giveaway',
  templateUrl: './giveaway-nomina.component.html'
})
export class GiveawayNominaComponent implements OnInit {
  cookie: string;
  environment = environment;

  constructor(private _cookieService: CookieServices, private title: Title, private meta: Meta) {
    this.cookie = this._cookieService.galletota;
  }

  ngOnInit() {

    this.title.setTitle('Giveaway Nómina | Hey Banco');
    this.meta.updateTag({ name: 'description', content: 'Cambia tu nómina a Hey Banco y llévate 1 año de tu sueldo participando en nuestro giveaway.'});
  }
}
