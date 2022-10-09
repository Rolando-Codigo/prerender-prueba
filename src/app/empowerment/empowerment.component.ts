import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-empowerment',
  templateUrl: './empowerment.component.html'
})
export class EmpowermentComponent {

  environment = environment;
}
