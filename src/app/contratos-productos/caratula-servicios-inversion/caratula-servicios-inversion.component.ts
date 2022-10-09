import { Component, OnInit } from '@angular/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-transparencia',
  templateUrl: './caratula-servicios-inversion.component.html'
})
export class FondosInversionCaratulaComponent implements OnInit {
  environment = environment;

  constructor(private metaTagsService : MetaTagsService){}

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Contrato | Inversión y Fondos de Inversión Hey');
    this.metaTagsService.setMetaDescription('Carátula de Servicios de Inversión Hey para Persona Física y Moral. Descarga aquí.');
  }
}
