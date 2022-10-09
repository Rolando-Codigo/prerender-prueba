import { Meta, Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { CookieServices } from './../../services/cookie.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-giveaway',
  templateUrl: './giveaway-diario.component.html'
})
export class GiveawayDiarioComponent implements OnInit {
  cookie: string;
  environment = environment;
  constructor(private _cookieService: CookieServices, private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.cookie = this._cookieService.galletota;
    this.title.setTitle('Giveaway Diario | Hey Banco');
    this.meta.updateTag({ name: 'description', content: '¡Giveaways todos los días!'});
  }
}
