import { Meta, Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { CookieServices } from './../../services/cookie.service';
import { environment } from '../../../environments/environment.prod';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-giveaway',
  templateUrl: './giveaway-amigos.component.html'
})
export class GiveawayAmigosComponent implements OnInit {
  cookie: string;
  environment = environment;

  constructor(private _cookieService: CookieServices, private title: Title, private meta: Meta) {
    // environment.assetsUrl = './assets/';
   }

  ngOnInit() {
    this.cookie = this._cookieService.galletota;
    this.title.setTitle('Giveaway Amigos | Hey Banco');
    this.meta.updateTag({ name: 'description', content: '¡Tú y un amigo pueden llevarse hasta $100,000!'});
  }
}
