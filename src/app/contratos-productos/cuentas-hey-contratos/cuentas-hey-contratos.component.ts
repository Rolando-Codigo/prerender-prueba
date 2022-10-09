import { Component, OnInit } from '@angular/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-transparencia',
  templateUrl: './cuentas-hey-contratos.component.html'
})
export class ContratoProductosCuentasHeyComponent  implements OnInit {
  environment = environment;

  constructor(private metaTagsService : MetaTagsService){}

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Contrato | Cuenta y Ahorro Hey');
    this.metaTagsService.setMetaDescription('Descarga aquí el contrato de tu Cuenta Hey Negocios o de tu Ahorro Hey Negocios.');
  }
}
