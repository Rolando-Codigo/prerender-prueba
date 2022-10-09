import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-mas-productos',
  templateUrl: './mas-productos.component.html',
  styleUrls: ['./mas-productos.component.css']
})
export class MasProductosComponent {

  environment = environment;

}
