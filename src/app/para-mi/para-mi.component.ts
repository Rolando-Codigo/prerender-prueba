import { Component } from '@angular/core';
import { CookieServices } from './../services/cookie.service';
import { environment } from '../../environments/environment.prod';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-para-mi',
  templateUrl: './para-mi.component.html',
  styleUrls: ['./para-mi.component.scss'],
})
export class ParaMiComponent {
  cookie: string;
  environment = environment;

  constructor(private _cookieService: CookieServices) { 
    this.cookie = this._cookieService.galletota;
  }
}
