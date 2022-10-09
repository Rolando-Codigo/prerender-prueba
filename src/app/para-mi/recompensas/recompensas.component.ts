import { Component, OnInit } from '@angular/core';
import { CookieServices } from './../../services/cookie.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-recompensas',
  templateUrl: './recompensas.component.html'
})
export class RecompensasComponent implements OnInit {
  cookie: string;
  environment = environment;
  constructor(private _cookieService: CookieServices) { }

  ngOnInit() {
    this.cookie = this._cookieService.galletota;
  }
}
