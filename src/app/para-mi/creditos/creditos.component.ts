import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-creditos',
  templateUrl: './creditos.component.html'
})
export class CreditosComponent {

  environment = environment;

}
