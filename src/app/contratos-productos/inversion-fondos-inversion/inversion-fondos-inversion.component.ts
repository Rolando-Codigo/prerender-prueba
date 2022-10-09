import { Component, OnInit } from '@angular/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-transparencia',
  templateUrl: './inversion-fondos-inversion.component.html'
})
export class InversionFondosInversionComponent implements OnInit {
  environment = environment;

  constructor(private metaTagsService : MetaTagsService){}

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Contrato | Inversión de Fondos Hey');
    this.metaTagsService.setMetaDescription('Contrato único de Inversión y Fondos de Inversión Hey y Hey Negocios así como la guía de Servicios de Inversión. Descarga aquí.');
  }
}
