import { Component, OnInit} from '@angular/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { environment } from '../../../environments/environment.prod';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-bienvenida-hey-banco',
  templateUrl: './bienvenida-hey-banco.component.html'
})
export class BienvenidaHeyBancoComponent implements OnInit {
  environment = environment;

  constructor(private metaTagsService : MetaTagsService) { }

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Conoce Hey Banco y alcanza tu libertad financiera');
    this.metaTagsService.setMetaDescription('Somos un banco digital sin sucursales. Transformamos nuestra operación en tasas siempre altas para ti. Sin plazos forzosos.');
  }

}
