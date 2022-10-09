import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-capitales',
  templateUrl: './capitales.component.html',
  styleUrls: ['./capitales.component.css']
})
export class CapitalesComponent {

  environment = environment;

}
