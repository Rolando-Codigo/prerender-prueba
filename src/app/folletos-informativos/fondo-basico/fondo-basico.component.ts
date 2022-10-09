import { Component, OnInit } from '@angular/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-transparencia',
  templateUrl: './fondo-basico.component.html'
})
export class FondoBasicoComponent implements OnInit {
  environment = environment;

  constructor(private metaTagsService : MetaTagsService){}

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Fondo de Inversión Básico | Hey Banco ');
    this.metaTagsService.setMetaDescription('Consulta prospectos, valores, DICI y descarga la cartera de valores semanal, la cartera de valores mensual para el Fondo Básico de Inversión Hey.');
  }
}
