import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { MetaTagsService } from '../services/meta-tags.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-transparencia',
  templateUrl: './servicios-legales.component.html'
})
export class ServiciosLegalesComponent implements OnInit {
  environment = environment;
  constructor(private metaTagsService : MetaTagsService) { }

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Servicios Legales Hey Banco');
    this.metaTagsService.setMetaDescription('Descarga nuestro Aviso de Privacidad y Aviso Legal. Consulta nuestra Ley de Transferencia. Conoce la información de CONDUSEF y el IPAB.');
  }

}
