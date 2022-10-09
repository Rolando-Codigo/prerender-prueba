import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CookieServices {

  galleta$: BehaviorSubject<string>;
  constructor(
    @Inject(PLATFORM_ID) public platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.galleta$ = new BehaviorSubject(this.getCookie2('userCookie'));
   }
  }

  galletota =  this.getCookie('_ga');

  getCookie(name: string) {

    if (isPlatformBrowser(this.platformId)) {
      const ca: Array<string> = document.cookie.split(';');
      const cookieName = name + '=';
      let c: string;

      for (let i = 0; i < ca.length; i += 1) {
        if (ca[i].indexOf(name, 0) > -1) {
          c = ca[i].substring(cookieName.length + 7, ca[i].length);
          return c;
        }
      }
    }

    return '';
  }

  public getCookie2(name: string) {

    if (isPlatformBrowser(this.platformId)) {
      const ca: Array<string> = document.cookie.split(';');
      const caLen: number = ca.length;
      const cookieName = `${name}=`;
      let c: string;

      for (let i = 0; i < caLen; i += 1) {
        c = ca[i].replace(/^\s+/g, '');
        if (c.indexOf(cookieName) === 0) {
          return c.substring(cookieName.length, c.length);
        }
      }
    }
    return '0';
  }

  public setCookie(params: any) {

    if (isPlatformBrowser(this.platformId)) {
      const d: Date = new Date();
      d.setTime(
        d.getTime() +
          (params.expireDays ? params.expireDays : 1) * 24 * 60 * 60 * 1000
      );
      document.cookie =
        (params.name ? params.name : '') +
        '=' +
        (params.value ? params.value : '') +
        ';' +
        (params.session && params.session === true
          ? ''
          : 'expires=' + d.toUTCString() + ';') +
        'path=' +
        (params.path && params.path.length > 0 ? params.path : '/') +
        ';' +
        (location.protocol === 'https:' && params.secure && params.secure === true
          ? 'secure'
          : '');
    }
  }

  subscriptionGalleta() {
    return this.galleta$.asObservable();
  }

}
