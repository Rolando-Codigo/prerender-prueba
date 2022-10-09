import { Meta, Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { CookieServices } from './../../services/cookie.service';
import { environment } from '../../../environments/environment.prod';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-giveaway',
  templateUrl: './giveaway-estudiantes.component.html'
})
export class GiveawayEstudiantesComponent implements OnInit {
  cookie: string;
  environment = environment;

  constructor(private _cookieService: CookieServices, private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.cookie = this._cookieService.galletota;
    this.title.setTitle('Giveaway Estudiantes | Hey Banco');
    this.meta.updateTag({ name: 'description', content: 'Hey te regala $100,000 pesos para tus estudios'});
  }
}
