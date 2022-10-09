import { Component, OnInit } from '@angular/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-transparencia',
  templateUrl: './contratos-productos.component.html'
})
export class ContratoProductosComponent implements OnInit {
  environment = environment;

  constructor(private metaTagsService : MetaTagsService){}

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Contratos de productos Hey Banco ');
    this.metaTagsService.setMetaDescription('Contrato Cuenta Hey, Tarjeta de Crédito Hey, Crédito Personal Hey, Inversión y Fondo de Inversión Hey. Descarga aquí.');
  }
}
