import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Subscription } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UtmsGuard implements CanActivate {
  constructor(
    private _router: Router,
    @Inject(PLATFORM_ID) public platformId: Object
    ) {
  }

  lastUrl: any;
  subscription: Subscription;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): any {
    if(isPlatformBrowser(this.platformId)) {
      if (
        this.lastUrl != null
        && this.lastUrl.url.search('/?/') !== -1
        && this.lastUrl.url.split('?')[1] !== state.url.split('?')[1]
        ) {
  
        const searchQ = location.search.substring(1);
        const queryParams = JSON.parse(
          '{"' + searchQ.replace(/&/g, '","').replace(/=/g, '":"') + '"}' ,
          (key, value) => {
            return key === '' ? value : decodeURIComponent(value);
          }
        );
  
        const urlTree = this._router.parseUrl(state.url);
        urlTree.queryParams = queryParams;
        return urlTree;
      }
  
      this.lastUrl = state;
      return true;
    } else {
      return true;
    }
  }

}
