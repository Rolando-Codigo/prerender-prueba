import { Meta, Title } from '@angular/platform-browser';
import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CookieServices } from './../../services/cookie.service';
import { GiveawayParticipacionNominaService } from './../../../app/services/giveaway-participacion-nomina.service';
import { ActivatedRoute } from '@angular/router';
import { RecaptchaComponent } from 'ng-recaptcha';
import { environment } from '../../../environments/environment';
import { GiveawayParticipacionNominaError } from 'src/app/models/giveaway/giveaway-participacion-nomina-error';
import { isPlatformBrowser } from '@angular/common';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-giveaway',
  templateUrl: './giveaway-participacion-nomina.component.html'
})
export class GiveawayParticipacionNominaComponent implements OnInit, OnDestroy, AfterViewInit {

  RECAPTCHA_KEY: any;
  host: string;
  public STATIC = GiveawayParticipacionNominaComponent;
  environment = environment;

  cookie: string;
  public codigo: string = '';
  private parameterSubscription: any;
  public busy = false;
  public conteo = '0';
  public folio = '0';
  public type = 'ALTA';
  public exito = false;
  public error = false;
  public errorMessage = '';

  constructor(
    private _cookieService: CookieServices,
    private title: Title, private meta: Meta,
    private giveawayParticipacionNominaService: GiveawayParticipacionNominaService,
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) public platformId: Object
  ) {

      if(isPlatformBrowser(this.platformId)) {
        this.host = window.location.hostname;
      }
      if (this.host === 'heybanco.com' || this.host === 'www.heybanco.com') {
        this.RECAPTCHA_KEY = '6LfWEOUZAAAAAM8qZL8f39_yUAU02Yv1064GvIIn';
      } else {
        this.RECAPTCHA_KEY = '6LcG8uceAAAAAGPYY7wKbZAERYZ9naoTlrP1PWpV';
      }

      this.cookie = this._cookieService.galletota;
    }


  @ViewChild(RecaptchaComponent) recaptchaComponent: RecaptchaComponent;

  ngOnInit() {

    this.title.setTitle('Giveaway Participación Nómina | Hey Banco ');
    this.meta.updateTag({ name: 'description', content: 'Llévate 1 año de tu sueldo* con Hey' });
    this.parameterSubscription = this.route.params.subscribe(params => {
      this.codigo = params['codigo'];
    });

  }

  ngOnDestroy() {
    this.parameterSubscription.unsubscribe();
  }

  ngAfterViewInit() {
    this.contador();
  }

  public participar(recaptcha?: string) {
    if (this.busy || this.exito) {
      return;
    }
    this.busy = true;
    if (recaptcha == null) {
      this.busy = false;
      this.type = 'ALTA';
      this.recaptchaComponent.execute();
      return;
    }
  this.exito = false;
  this.error = false;

    this.giveawayParticipacionNominaService.altaClaveGiveaway(this.codigo, recaptcha, this.host).subscribe((response) => {
      this.busy = false;
      console.log('RESPUESTA DE LA ALTA DE GIVEAWAY', response);
      this.folio = response.numeroClick.toString();
      this.exito = true;
      this.contador();
    }, (error) => {
      this.busy = false;
      this.error = true;
      if (error instanceof GiveawayParticipacionNominaError) {
        this.errorMessage = error.message;
      } else {
        this.errorMessage = 'Mensaje genérico';
      }
      console.log('ERROR DE LA ALTA DE GIVEAWAY', error);
    });
  }

  public contador(recaptcha?: string) {
    if (this.busy) {
      return;
    }
    this.busy = true;
    if (recaptcha == null) {
      this.busy = false;
      this.type = 'CONTADOR';
      this.recaptchaComponent.execute();
      return;
    }


    const fecha = new Date();
    this.giveawayParticipacionNominaService.contadorGiveaway(this.codigo, recaptcha, this.host).subscribe((response) => {
      this.busy = false;
      console.log('RESPUESTA DE CONTADOR', response);
      this.conteo = response.contadorAux.toString();
    }, (error) => {
      this.busy = false;
      console.log('RESPUESTA DE CONTADOR', error);
    });
  }

  public submitRequest(type: string, recaptcha?: string) {
    if (type === 'ALTA' ) {
      this.participar (recaptcha);
      return;
    }

    if (type === 'CONTADOR' ) {
      this.contador (recaptcha);
      return;
    }
  }
}
