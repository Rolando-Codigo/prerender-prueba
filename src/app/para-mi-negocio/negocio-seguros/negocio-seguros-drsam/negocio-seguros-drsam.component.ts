import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-seguros-drsam',
  templateUrl: './negocio-seguros-drsam.component.html'
})
export class NegocioSegurosDrsamComponent {

  environment = environment;

}
