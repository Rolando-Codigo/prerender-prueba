import { Component, OnInit } from '@angular/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-transparencia',
  templateUrl: './creditos-hey-negocios.component.html'
})
export class CreditosHeyNegocioComponent implements OnInit {
  environment = environment;

  constructor(private metaTagsService : MetaTagsService){}

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Folleto Informativo | Créditos Hey Negocios');
    this.metaTagsService.setMetaDescription('Conoce los requisitos, características, beneficios y comisiones de nuestros Créditos Hey Negocios. Contrata sin ir a sucursal.');
  }
}
