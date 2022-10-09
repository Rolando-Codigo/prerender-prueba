import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-hero-image',
  templateUrl: './hero-image.component.html'
})
export class HeroImageComponent {
  image: string;
  headline: string;
  body: string;
  button: string;
  environment = environment;

}
