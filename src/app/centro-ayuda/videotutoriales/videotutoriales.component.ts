import { Component, OnInit } from '@angular/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-stories',
  templateUrl: './videotutoriales.component.html'
})
export class CentroAyudaVideotutorialesComponent implements OnInit {

  environment = environment;
  constructor(private metaTagsService : MetaTagsService) { }

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Videotutoriales Hey Banco');
    this.metaTagsService.setMetaDescription('Conoce de manera rápida y sencilla el uso de nuestros productos: Cuenta, Ahorro, Seguro, Banca Web, Inversión, Tarjeta de Crédito Hey y uso de App Hey aqui.');
  }

}
