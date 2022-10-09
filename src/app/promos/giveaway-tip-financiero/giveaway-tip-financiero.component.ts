import { Meta, Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { CookieServices } from './../../services/cookie.service';
import { environment } from '../../../environments/environment.prod';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-giveaway',
  templateUrl: './giveaway-tip-financiero.component.html'
})
export class GiveawayTipFinancieroComponent implements OnInit {
  cookie: string;
  environment = environment;

  constructor(private _cookieService: CookieServices, private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.cookie = this._cookieService.galletota;
    this.title.setTitle('Giveaway Ahorro | Hey Banco');
    this.meta.updateTag({ name: 'description', content: 'Ahorra y ¡llévate el doble!'});
  }
}
