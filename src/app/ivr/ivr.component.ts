import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { MetaTagsService } from '../services/meta-tags.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-ivr',
  templateUrl: './ivr.component.html'
})
export class IvrComponent implements OnInit {

  environment = environment;
  constructor(private metaTagsService : MetaTagsService) { }

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Reportes | ¿En qué podemos ayudarte hoy?');
    this.metaTagsService.setMetaDescription('Reporta una falla con tu app, aclara una o varias dudas o sugiere una mejora de nuestro servicio. ¡Estamos para escucharte!');
  }
}
