import { Component, OnInit } from '@angular/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-transparencia',
  templateUrl: './contratos-productos-negocios.component.html'
})
export class ContratoProductosNegociosComponent implements OnInit {
  environment = environment;

  constructor(private metaTagsService : MetaTagsService){}

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Contrato |  Producto Personal y Negocios Hey');
    this.metaTagsService.setMetaDescription('Descarga aquí los contratos de Cuentas, Inversiones, Tarjeta de Crédito y Créditos Hey para ti o para tu negocio.');
  }
}
