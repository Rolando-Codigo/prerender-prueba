import { Component, OnInit } from '@angular/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-transparencia',
  templateUrl: './bolsa-mexicana.component.html'
})
export class FondoBolsaMexicanaComponent implements OnInit {
  environment = environment;

  constructor(private metaTagsService : MetaTagsService){}

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Fondo de Inversión | Bolsa Mexicana');
    this.metaTagsService.setMetaDescription('Consulta prospectos, valores, DICI. Descarga la cartera de valores semanal y la cartera de valores mensual de la Bolsa Mexicana de Valores.');
  }
}
