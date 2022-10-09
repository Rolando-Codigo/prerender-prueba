import { Component, OnInit } from '@angular/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-cuenta-numero',
  templateUrl: './movimientos-cuentas.component.html',
  styleUrls: ['./movimientos-cuentas.component.css']
})
export class CentroAyudaMovimientosCuentasComponent implements OnInit {

  environment = environment;
  constructor(private metaTagsService : MetaTagsService) { }

  ngOnInit() {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Centro de Ayuda | Movimientos en tu Cuenta Hey');
    this.metaTagsService.setMetaDescription('Conoce como realizar movimientos dentro de tu Cuenta Hey desde tu App Hey Banco. ');
  }

}
