import { Component, OnInit } from '@angular/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { environment } from 'src/environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-transparencia',
  templateUrl: './pre-obd-tdc-you.component.html'
})
export class PreOBDTarjetaCreditoComponent implements OnInit {

  env = environment;
  // host: string;
  fecha: any;
  ajuste: boolean;

  constructor(
    private metaTagsService : MetaTagsService
  ) {
    this.fecha = new Date();

    if (this.fecha.toISOString().split('T')[0] > '2022-08-19') {
      this.ajuste = true;
    } else {
      this.ajuste = false;
    }
  }

  ngOnInit() {
    // this.host = window.location.hostname;
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Inversión Hey te da una tasa del 8.00%');
    this.metaTagsService.setMetaDescription('¡Invierte tu dinero en minutos! Contrata y administra tu pagaré desde tu app Hey Banco y disfruta de las mejores tasas del mercado.');
  }
}


