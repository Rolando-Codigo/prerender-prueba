import { Component, OnInit } from '@angular/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-transparencia',
  templateUrl: './folletos-informativos-negocios.component.html'
})
export class FolletosInformativosNegociosComponent implements OnInit {
  environment = environment;

  constructor(private metaTagsService : MetaTagsService){}

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Folletos Informativos | Productos Hey y Negocios Hey');
    this.metaTagsService.setMetaDescription('Conoce a detalle las opciones de productos bancarios que tenemos para ti y tu negocio. Contrata la más te guste para ti o tu empresa en minutos.');
  }
}
