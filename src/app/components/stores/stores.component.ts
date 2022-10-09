import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-stores',
  templateUrl: './stores.component.html'
})
export class StoresComponent {

  environment = environment;

}
