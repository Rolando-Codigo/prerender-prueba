import { Component, OnInit } from '@angular/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-transparencia',
  templateUrl: './cuentas-hey-negocios.component.html'
})
export class CuentasHeyNegocioComponent implements OnInit {
  environment = environment;

  constructor(private metaTagsService : MetaTagsService){}

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Folleto Informativo | Cuenta Hey Negocios');
    this.metaTagsService.setMetaDescription('Conoce a detalle requisitos, características, beneficios y comisiones de las Cuentas Hey Negocios y Ahorros Hey Negocios.');
  }
}
