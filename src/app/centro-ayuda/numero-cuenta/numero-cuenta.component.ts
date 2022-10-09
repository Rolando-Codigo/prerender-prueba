import { Component, OnInit } from '@angular/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-cuenta-numero',
  templateUrl: './numero-cuenta.component.html',
  styleUrls: ['./numero-cuenta.component.css']
})
export class CentroAyudaNumeroCuentaComponent implements OnInit {

  environment = environment;
  constructor(private metaTagsService : MetaTagsService) { }

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Centro de Ayuda | Número de Cuenta Hey');
    this.metaTagsService.setMetaDescription('Te decimos paso a paso como encontrar tu número de Cuenta Hey aquí.');
  }

}
