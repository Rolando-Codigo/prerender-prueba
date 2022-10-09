import { Component, OnInit } from '@angular/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-transparencia',
  templateUrl: './transparencia.component.html'
})
export class TransparenciaComponent implements OnInit {

  environment = environment;
  constructor(private metaTagsService : MetaTagsService) { }

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Ley de Transparencia Hey Banco');
    this.metaTagsService.setMetaDescription('En Hey la transparencia en la información de nuestros productos y servicios es fundamental. Consulta en nuestro sitio las comisiones aplicables.');
  }

}
