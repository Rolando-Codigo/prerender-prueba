import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { MetaTagsService } from '../services/meta-tags.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-corresponsales',
  templateUrl: './corresponsales.component.html'
})
export class CorresponsalesComponent implements OnInit {

  environment = environment;
  constructor(private metaTagsService : MetaTagsService) { }

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Deposita o retira en más de 23,000 puntos Hey');
    this.metaTagsService.setMetaDescription('Conoce los puntos y cajeros donde puedes realizar movimientos o disponer de tu dinero al momento. Pagos y depósitos en Oxxo, 7-Eleven, BBVA.');
  }

}
