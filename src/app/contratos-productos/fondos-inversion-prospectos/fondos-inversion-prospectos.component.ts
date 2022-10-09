import { Component, OnInit } from '@angular/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-transparencia',
  templateUrl: './fondos-inversion-prospectos.component.html'
})
export class FondosInversionProspectosComponent implements OnInit {
  environment = environment;

  constructor(private metaTagsService : MetaTagsService){}

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Contrato | Inversión de Fondos Hey');
    this.metaTagsService.setMetaDescription('Carátula de contrato Inversión de Fondos Hey para Persona Física y Moral. Descarga aquí.');
  }
}
