import { Component, OnInit } from '@angular/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-condusef',
  templateUrl: './condusef.component.html'
})
export class CondusefComponent implements OnInit {

  environment = environment;
  constructor(private metaTagsService : MetaTagsService) { }

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Condusef | Hey Banco');
    this.metaTagsService.setMetaDescription('Consulta aquí los datos de contacto de la Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financiero. (CONDUSEF).');
  }

}
