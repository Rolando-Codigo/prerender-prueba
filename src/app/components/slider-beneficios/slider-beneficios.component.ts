import { Component, OnInit } from '@angular/core';
import { CookieServices } from 'src/app/services/cookie.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-slider-beneficios',
  templateUrl: './slider-beneficios.component.html'
})
export class SliderBeneficiosComponent implements OnInit {

  environment = environment;
  cookie: string;
  constructor(private _cookieService: CookieServices) { }

  ngOnInit() {

    this.cookie = this._cookieService.galletota;
  }

}
