import { Component, OnInit } from '@angular/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { environment } from 'src/environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-transparencia',
  templateUrl: './tarjeta-hey-negocios.component.html',
  styleUrls: ['./tarjeta-hey-negocios.component.css']
})
export class TarjetaHeyNegociosComponent implements OnInit {

  env = environment;
  fecha: any;
  ajuste: boolean;

  constructor(
    private metaTagsService: MetaTagsService
  ) {
    this.fecha = new Date();

    if (this.fecha.toISOString().split('T')[0] > '2022-08-19') {
      this.ajuste = true;
    } else {
      this.ajuste = false;
    }
  }

  ngOnInit() {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Mejora tu negocio con tu Cuenta Hey Negocios ');
    this.metaTagsService.setMetaDescription('Con tu Cuenta Hey Negocios accede a inversión a 7 días, increíbles tasas de crédito y depósitos de tus ventas a menos de 24 horas.');
  }

}

