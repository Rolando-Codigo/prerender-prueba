import { Component, OnInit } from '@angular/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-cuenta-numero',
  templateUrl: './abrir-cuenta.component.html',
  styleUrls: ['./abrir-cuenta.component.css']
})
export class CentroAyudaAbrirCuentaComponent implements OnInit {

  environment = environment;
  constructor(private metaTagsService : MetaTagsService) { }

  ngOnInit() {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Centro de Ayuda | Como abrir una Cuenta Hey ');
    this.metaTagsService.setMetaDescription('Conoce paso a paso como abrir una Cuenta Hey desde tu App Hey Banco en minutos.');
  }

}
