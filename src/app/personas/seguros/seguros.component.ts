import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-seguros',
  templateUrl: './seguros.component.html'
})
export class SegurosComponent {

  environment = environment;

}
