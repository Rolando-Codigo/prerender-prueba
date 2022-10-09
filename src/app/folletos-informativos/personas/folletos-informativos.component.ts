import { Component, OnInit } from '@angular/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-transparencia',
  templateUrl: './folletos-informativos.component.html'
})
export class FolletosInformativosComponent implements OnInit {
  environment = environment;

  constructor(private metaTagsService : MetaTagsService){}

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Folletos informativos | Productos Hey');
    this.metaTagsService.setMetaDescription('Nuestros productos bancarios están diseñados para construir tu libertad financiera. Conoce a detalle nuestra variedad de productos.');
  }

}
