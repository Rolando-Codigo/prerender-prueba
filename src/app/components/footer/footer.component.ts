import { Component } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  environment = environment;

  constructor(
    private blog: BlogService,
    ) {}
}
