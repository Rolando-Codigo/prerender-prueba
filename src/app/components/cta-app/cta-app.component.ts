import { Component, Input, ViewEncapsulation } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-cta-app',
  templateUrl: './cta-app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class CtaAppComponent {

  environment = environment;
  @Input() bg1: boolean;
  @Input() bgWhite: boolean;
  @Input() bg2: boolean;

}
