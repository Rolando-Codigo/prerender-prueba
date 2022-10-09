import { Component, OnInit } from '@angular/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-transparencia',
  templateUrl: './dolares-americanos.component.html'
})
export class FondoDolaresAmericanosComponent implements OnInit {
  environment = environment;

  constructor(private metaTagsService : MetaTagsService){}

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Fondo de Inversión | Dólares Americanos');
    this.metaTagsService.setMetaDescription('Cartera de valores semanal. Cartera de valores mensual. Documento clave para el Fondo de Inversión en moneda extranjera.');
  }
}
