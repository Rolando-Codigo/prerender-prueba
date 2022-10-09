import { Component, OnInit } from '@angular/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-cuenta-numero',
  templateUrl: './rastreo-tarjeta.component.html',
  styleUrls: ['./rastreo-tarjeta.component.css']
})
export class CentroAyudaRastreoTarjetaComponent implements OnInit {

  environment = environment;
  constructor(private metaTagsService: MetaTagsService) { }

  ngOnInit() {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Centro de Ayuda |  Rastreo de tu tarjeta');
    this.metaTagsService.setMetaDescription('Conoce como rastrear la entrega de tu Tarjeta Hey dentro de tu app Hey Banco.');
  }

}
