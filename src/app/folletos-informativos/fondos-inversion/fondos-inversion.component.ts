import { Component, OnInit } from '@angular/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-transparencia',
  templateUrl: './fondos-inversion.component.html'
})
export class FondosInversionLegalesComponent implements OnInit {
  environment = environment;

  constructor(private metaTagsService : MetaTagsService){}

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Conoce nuestros Fondos de Inversión');
    this.metaTagsService.setMetaDescription('Conoce a detalle nuestros 4 Fondos de Inversión a corto, mediano y largo plazo así como los cambios más significativos en nuesra sección avisos relevantes.');
  }
}
