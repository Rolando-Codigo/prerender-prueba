import { Component, OnInit } from '@angular/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-legal',
  templateUrl: './legal.component.html'
})
export class LegalComponent implements OnInit {

  environment = environment;
  constructor(private metaTagsService : MetaTagsService) { }

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Aviso Legal Hey Banco ');
    this.metaTagsService.setMetaDescription('Conoce nuestros Términos generales, Servicios, materiales y productos, Mercado de Alianzas en internet y nuestras Políticas de Responsabilidad.');
  }

}
