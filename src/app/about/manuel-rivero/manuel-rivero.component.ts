import { Meta, Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { CookieServices } from './../../services/cookie.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-manuel',
  templateUrl: './manuel-rivero.component.html'
})
export class ManuelComponent implements OnInit {
  cookie: string;
  environment = environment;
  constructor(private _cookieService: CookieServices, private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.cookie = this._cookieService.galletota;
    this.title.setTitle('Líderes Hey Banco | Manuel Rivero Zambrano');
    this.meta.updateTag({ name: 'description', content: 'Conoce al CEO de Hey Banco. Manuel Zambrano participa en el desarrollo constante de nuevos productos y servicios financieros. Cuenta con 18 años de experiencia.'});
  }
}
