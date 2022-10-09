import { Component, OnInit } from '@angular/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-transparencia',
  templateUrl: './promociones.component.html'
})
export class PromocionesComponent implements OnInit {
  environment = environment;
  constructor(private metaTagsService : MetaTagsService) { }

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Promociones | Hey Banco');
    this.metaTagsService.setMetaDescription('Paga con tu Tarjeta Hey y forma parte de nuestras increíbles promociones, giveaways y cashback. Boleto Dorado. Giveaway Nómina Hey. Giveaway Referidos.');
  }

}
