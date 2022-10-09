import { Component, OnInit } from '@angular/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-privacidad',
  templateUrl: './privacidad.component.html'
})
export class PrivacidadComponent implements OnInit {

  environment = environment;
  constructor(private metaTagsService : MetaTagsService) { }

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Aviso de Privacidad Hey Banco ');
    this.metaTagsService.setMetaDescription('Consulta a detalle nuestro Aviso de Privacidad así como los Lineamientos de uso de Cookies y Web beacons. ');
  }

}
