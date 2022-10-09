import { Component, OnInit } from '@angular/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-ipab',
  templateUrl: './ipab.component.html'
})
export class IpabComponent implements OnInit {

  environment = environment;
  constructor(private metaTagsService : MetaTagsService) { }

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('IPAB | Hey Banco');
    this.metaTagsService.setMetaDescription('Servicios o productos bancarios de Hey Banco garantizados por el El Instituto para la Protección al Ahorro Bancario (IPAB)');
  }

}
