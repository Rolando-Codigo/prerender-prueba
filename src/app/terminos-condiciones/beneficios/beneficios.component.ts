import { Component, OnInit } from '@angular/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-transparencia',
  templateUrl: './beneficios.component.html'
})
export class BeneficiosComponent implements OnInit {
  environment = environment;
  constructor(private metaTagsService : MetaTagsService) { }

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Beneficios | Hey Banco');
    this.metaTagsService.setMetaDescription('Términos y Condiciones de nuestros beneficios en Rendimientos, Protección de Vida, Protección Hey, Inversión +9.00% y Recompensas.');
  }

}
