import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CookieServices } from '../../services/cookie.service';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-cookies',
  templateUrl: './cookies.component.html'
})
export class CookiesComponent {

  constructor(
    public router: Router, 
    private cookieServices: CookieServices,
    @Inject(PLATFORM_ID) public platformId: Object
    ) { 
      console.log('init CookiesComponent');
    }

  aceptCookie() {
    if(isPlatformBrowser(this.platformId)){
      this.cookieServices.setCookie({
        name: 'userCookie',
        value: 'terms',
        session: true,
      });
      this.cookieServices.galleta$.next('terms');
    }
  }
}
