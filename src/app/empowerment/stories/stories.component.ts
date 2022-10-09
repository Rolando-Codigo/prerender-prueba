import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-stories',
  templateUrl: './stories.component.html'
})
export class StoriesComponent {

  environment = environment;
}
