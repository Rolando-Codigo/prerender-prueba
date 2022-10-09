import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-inicio',
  templateUrl: './inicio.component.html'
})
export class InicioComponent {

  environment = environment;

}
