import { Component, OnInit } from '@angular/core';
import { CookieServices } from './../../services/cookie.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-applepay',
  templateUrl: './applepay.component.html'
})
export class ApplepayComponent implements OnInit {
  cookie: string;
  environment = environment;
  constructor(private _cookieService: CookieServices) { }

  ngOnInit() {
    this.cookie = this._cookieService.galletota;
  }
}
