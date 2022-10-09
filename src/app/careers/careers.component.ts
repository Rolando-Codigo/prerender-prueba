import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { MetaTagsService } from '../services/meta-tags.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-careers',
  templateUrl: './careers.component.html',
  styleUrls:['./careers.scss']
})
export class CareersComponent implements OnInit {
  environment = environment;
  constructor(private metaTagsService: MetaTagsService) { }

  ngOnInit() {
    this.setMetaTags();
  }


  setMetaTags() : void {
    this.metaTagsService.setTitle('Conviértete en Digital Banker');
    this.metaTagsService.setMetaDescription('¡Somos más que un banco! Conoce nuestra cultura de trabajo y únete a nuestro gran equipo.');
  }

}
