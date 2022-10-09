import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-credito-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
  environment = environment;

}
