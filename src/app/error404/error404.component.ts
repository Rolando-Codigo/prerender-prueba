import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-error404',
  templateUrl: './error404.component.html'
})
export class Error404Component {

  environment = environment;

}
