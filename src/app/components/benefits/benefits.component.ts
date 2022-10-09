import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-benefits',
  templateUrl: './benefits.component.html'
})
export class BenefitsComponent {
  benefits: '';
  environment = environment;

}
