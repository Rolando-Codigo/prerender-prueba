import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-money-coach',
  templateUrl: './money-coach.component.html'
})
export class MoneyCoachComponent {

  environment = environment;

}
