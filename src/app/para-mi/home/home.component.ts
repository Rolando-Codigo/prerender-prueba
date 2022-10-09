import { Meta, Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { CookieServices } from './../../services/cookie.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  cookie: string;
  environment = environment;

  constructor(private _cookieService: CookieServices, private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.cookie = this._cookieService.galletota;
    this.title.setTitle('Hey Banco');
    this.meta.updateTag({ name: 'description', content: 'Disfruta de realizar tus compras por internet a meses sin intereses en comercios participantes.'});
  }
}
