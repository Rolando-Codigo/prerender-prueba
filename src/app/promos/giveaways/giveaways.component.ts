import { Meta, Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { CookieServices } from './../../services/cookie.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-giveaway',
  templateUrl: './giveaways.component.html'
})
export class GiveawaysComponent implements OnInit {
  cookie: string;
  environment = environment;

  constructor(private _cookieService: CookieServices, private title: Title, private meta: Meta) {
    this.cookie = '';
  }

  ngOnInit() {
    this.cookie = this._cookieService.galletota;
    this.title.setTitle('Giveaways con tu Tarjeta Hey');
    this.meta.updateTag({ name: 'description', content: 'Al hacer uso de tu Cuente Hey tienes la oportunidad de participar en todos nuestros giveaways. Boleto Dorado. Nómina Hey.'});
  }
}
