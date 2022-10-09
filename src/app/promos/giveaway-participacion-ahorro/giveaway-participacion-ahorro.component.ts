import { Meta, Title } from '@angular/platform-browser';
import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CookieServices } from './../../services/cookie.service';
import { GiveawayParticipacionAhorroService } from './../../../app/services/giveaway-participacion-ahorro.service';
import { ActivatedRoute } from '@angular/router';
import { RecaptchaComponent } from 'ng-recaptcha';
import { environment } from '../../../environments/environment';
import { GiveawayParticipacionAhorroError } from 'src/app/models/giveaway/giveaway-participacion-ahorro-error';
import { GiveawayParticipacionNominaService } from 'src/app/services/giveaway-participacion-nomina.service';
import { isPlatformBrowser } from '@angular/common';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-giveaway',
  templateUrl: './giveaway-participacion-ahorro.component.html'
})
export class GiveawayParticipacionAhorroComponent implements OnInit, OnDestroy, AfterViewInit {

  // tslint:disable-next-line:max-line-length
  constructor(
    private _cookieService: CookieServices, 
    private title: Title, 
    private meta: Meta, 
    private giveawayParticipacionNominaService: GiveawayParticipacionNominaService, 
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) public platformId: Object
  ) { }
  RECAPTCHA_KEY;
  host: string;
  public STATIC = GiveawayParticipacionAhorroComponent;
  environment = environment;

  cookie: string;
  public codigo: string = null;
  private parameterSubscription: any;
  public busy = false;
  public conteo = '0';
  public folios = [];
  public type = 'ALTA';
  public exito = false;
  public error = false;
  public errorMessage = '';

  public nParticipacion = 0;

  @ViewChild(RecaptchaComponent) recaptchaComponent: RecaptchaComponent;

  ngOnInit() {
    if( isPlatformBrowser(this.platformId)) {
      this.host = window.location.hostname;
    }
    if (this.host === 'heybanco.com' || this.host === 'www.heybanco.com') {
      this.RECAPTCHA_KEY = '6LfWEOUZAAAAAM8qZL8f39_yUAU02Yv1064GvIIn';
    } else {
      this.RECAPTCHA_KEY = '6LcG8uceAAAAAGPYY7wKbZAERYZ9naoTlrP1PWpV';
    }

    this.cookie = this._cookieService.galletota;
    this.title.setTitle('Giveaway participación ahorro | Hey Banco');
    this.meta.updateTag({ name: 'description', content: 'Ahorra y ¡llévate el doble!' });
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

    this.giveawayParticipacionNominaService.altaMultiplesClaveGiveaway(this.codigo, recaptcha, this.host).subscribe((response) => {
      this.busy = false;
      console.log('RESPUESTA DE LA ALTA DE GIVEAWAY', response);
      this.folios = response.map( it => {
        return it.numeroClick;
      });
      this.exito = true;
      this.contador();
    }, (error) => {
      this.busy = false;
      this.error = true;
      if (error instanceof GiveawayParticipacionAhorroError) {
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

    this.giveawayParticipacionNominaService.contadorGiveaway(this.codigo, recaptcha, this.host).subscribe((response) => {
      this.busy = false;
      this.conteo = response.contadorAux.toString();
      this.getNumeroParticipaciones();
    }, (error) => {
      this.busy = false;
    });
  }

  public getNumeroParticipaciones(recaptcha?: string) {
    if (this.busy) {
      return;
    }
    this.busy = true;
    if (recaptcha == null) {
      this.busy = false;
      this.type = 'PARTICIPACIONES';
      this.recaptchaComponent.execute();
      return;
    }

    this.giveawayParticipacionNominaService.numeroParticipacionesGiveaway(this.codigo, recaptcha, this.host).subscribe((response) => {
      this.busy = false;
      this.nParticipacion = response.numroParticipaciones.toString();
    }, (error) => {
      this.busy = false;
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


    if (type === 'PARTICIPACIONES' ) {
      this.getNumeroParticipaciones(recaptcha);
      return;
    }

  }
}
