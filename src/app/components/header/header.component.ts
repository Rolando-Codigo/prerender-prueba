import { Component, ElementRef, HostListener, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HeyNavigationItem } from 'src/app/shared/types/hey-navigation';
import { environment } from '../../../environments/environment';
import { CookieServices } from '../../services/cookie.service';
import { isPlatformBrowser } from '@angular/common';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  environment = environment;
  xPoint;
  yPoint;
  showBanca = false;
  menuActive: HeyNavigationItem;
  galleta;
  fecha: any;
  ajuste: boolean;
  @ViewChild('accesoBanca') accesoBanca: ElementRef;
  @ViewChild('menu') menu: ElementRef;
  @ViewChild('menu2') menu2: ElementRef;

  hiddenBtnCliente = true;
  hoverBanca = false;
  hoverPersonas = false;
  routesHidden = [
    '/negocios/tarjeta-hey-negocios',
    '/personas/tdc/hazte-cliente',
    '/negocios/cuenta/pre-obd',
  ];
  showMenu = false;

  constructor(
    private eRef: ElementRef,
    public router: Router,
    private blog: BlogService,
    private cookieServices: CookieServices,
    @Inject(PLATFORM_ID) public platformId: Object
    ) {
      this.fecha = new Date();
  }

  ngOnInit(): void {

    if (this.fecha.toISOString().split('T')[0] > '2022-08-19') {
      this.ajuste = true;
    } else {
      this.ajuste = false;
    }

    if (isPlatformBrowser(this.platformId)) {
      this.cookieServices.subscriptionGalleta()
        .pipe(
          filter( it => it != null)
        )
        .subscribe( it => {
        this.galleta = it;
      });
    }
    this.router.events.pipe(filter( (it: any) => {
      return it != null && it.url != null;
    })).subscribe((route: any) => {
      this.hiddenBtnCliente = this.routesHidden.filter( it => {
        return route.url.search(it) !== -1;
      }).length > 0;
    });

    this.initMenu();
  }

  initMenu() {
    // console.log('initMenu'); 
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {

      if ( event.target.getAttribute('id') !== 'btnId'
        && ( !(this.accesoBanca != null && this.accesoBanca.nativeElement.contains(event.target))
        || !this.eRef.nativeElement.contains(event.target)
        // || !(this.toogleNav != null && !this.toogleNav.nativeElement.contains(event.target))
        // && ( !(this.menu2 != null && this.menu2.nativeElement.contains(event.target)))
        || !this.eRef.nativeElement.contains(event.target)
        // || !(this.toogleNav != null && !this.toogleNav.nativeElement.contains(event.target)) )
        )) {
        this.showBanca = false;
    }
  }

  showBancaF(event) {
    this.xPoint = event.x - 160;
    this.yPoint = event.y - 160;
    this.showBanca = true;
  }

  extarnalUrl(url: string) {

    if (isPlatformBrowser(this.platformId)) {
      window.open(url, '_blank');
    }
  }
}
