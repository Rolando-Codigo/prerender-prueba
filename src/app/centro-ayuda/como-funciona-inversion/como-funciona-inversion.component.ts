import { Component, OnInit } from '@angular/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-cuenta-numero',
  templateUrl: './como-funciona-inversion.component.html',
  styleUrls: ['./como-funciona-inversion.component.css']
})
export class CentroAyudaInversionHeyComponent implements OnInit {

  environment = environment;
  constructor(private metaTagsService : MetaTagsService) { }

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Centro de Ayuda | ¿Qué es y cómo funciona Inversión Hey?');
    this.metaTagsService.setMetaDescription('');
  }

}
