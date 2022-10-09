import { Component, Input } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-slider-productos',
  templateUrl: './slider-productos.component.html'
})
export class SliderProductosComponent {

  environment = environment;
  @Input() bg1: boolean;
  @Input() bg2: boolean;
  @Input() bgWhite: boolean;

}
