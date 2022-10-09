import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { CookieServices } from 'src/app/services/cookie.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-credito-auto',
  templateUrl: './auto.component.html'
})
export class CreditoAutoComponent implements OnInit {
  environment = environment;
  cookie: string;
  constructor(
    private _cookieService: CookieServices
  ) { }

  ngOnInit() {
    this.cookie = this._cookieService.galletota;
  }

}
