import { Component, OnInit } from '@angular/core';
import { CookieServices } from './../services/cookie.service';
import { environment } from '../../environments/environment';
import { MetaTagsService } from '../services/meta-tags.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-promos',
  templateUrl: './promos.component.html'
})
export class PromosComponent implements OnInit {
  cookie: string;
  environment = environment;
  constructor(private _cookieService: CookieServices,
    private metaTagsService : MetaTagsService) {
    this.cookie = this._cookieService.galletota;
  }

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Promociones con tu Tarjeta Hey');
    this.metaTagsService.setMetaDescription('Paga tus compras con Hey y obtén grandes descuentos o Meses sin Intereses en comercios participantes: Costco, Walmart. Bodega Aurrera. Chedraui.');
  }
}
