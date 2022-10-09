import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-bienvenida-negocios-hey',
  templateUrl: './bienvenida-negocios-hey.component.html',
  styleUrls: ['./bienvenida-negocios-hey.component.css']
})
export class BienvenidaNegociosHeyComponent {
  environment = environment;

}
