import { Component, OnInit } from '@angular/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-transparencia',
  templateUrl: './cuentas-hey.component.html'
})
export class CuentasHeyComponent implements OnInit {
  environment = environment;

  constructor(private metaTagsService : MetaTagsService){}

  ngOnInit(): void {
      this.setMetaTags();
    }

    setMetaTags() : void {
      this.metaTagsService.setTitle('Conoce nuestras Cuentas Hey ');
      this.metaTagsService.setMetaDescription('Compara los beneficios, características y requisitos de todas nuestras Cuentas Hey y elige la que mejor se acomode a tus necesidades.');
    }

}
