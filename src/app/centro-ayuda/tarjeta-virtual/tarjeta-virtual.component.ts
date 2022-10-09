import { Component, OnInit } from '@angular/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-cuenta-numero',
  templateUrl: './tarjeta-virtual.component.html',
  styleUrls: ['./tarjeta-virtual.component.css']
})
export class CentroAyudaTarjetaVirtualComponent implements OnInit {

  environment = environment;
  constructor(private metaTagsService: MetaTagsService) { }

  ngOnInit() {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Centro de Ayuda |  Tarjeta Virtual');
    this.metaTagsService.setMetaDescription('Conoce como activar y hacer uso de tu Tarjeta Virtual Hey en minutos aquí. Paga más seguro en línea con tu Tarjeta Virtual Hey.');
  }

}
