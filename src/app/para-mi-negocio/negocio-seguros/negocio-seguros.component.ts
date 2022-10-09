import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-seguros',
  templateUrl: './negocio-seguros.component.html'
})
export class NegocioSegurosComponent {

  environment = environment;

}
