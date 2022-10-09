import { Meta, Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { CookieServices } from './../../services/cookie.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-tarjeta-de-credito',
  templateUrl: './tarjeta-de-credito.component.html'
})
export class TarjetaDeCreditoComponent implements OnInit {
  cookie: string;
  environment = environment;

  constructor(private _cookieService: CookieServices, private title: Title, private meta: Meta) {
    this.cookie = this._cookieService.galletota;
  }

  ngOnInit() {
    this.title.setTitle('Tarjeta de Crédito Hey y Hey Garantizada ');
    this.meta.updateTag({ name: 'description', content: 'Diseñamos tarjetas de crédito que te ofrecen mejores beneficios, mejorar tu buró de crédito o iniciar un nuevo historial financiero. ¡Conócelas!'});
  }
}
