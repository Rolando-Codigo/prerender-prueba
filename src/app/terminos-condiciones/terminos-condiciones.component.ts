import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { MetaTagsService } from '../services/meta-tags.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-transparencia',
  templateUrl: './terminos-condiciones.component.html'
})
export class TerminosCondicionesComponent implements OnInit {
  environment = environment;
  constructor(private metaTagsService : MetaTagsService) { }

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Términos y Condiciones Hey Banco');
    this.metaTagsService.setMetaDescription('Términos y Condiciones de nuestros Beneficios Hey, Promociones Hey y uso de página web Hey.');
  }

}
