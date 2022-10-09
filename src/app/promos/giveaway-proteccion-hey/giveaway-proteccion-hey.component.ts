import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecaptchaComponent } from 'ng-recaptcha';
import { ConfirmModalService } from 'src/app/components/confirm-modal/confirm-modal.service';
import { GiveawayParticipacionReferidosService } from 'src/app/services/giveaway-participacion-referidos.service';
import { environment } from 'src/environments/environment.prod';
import { isPlatformBrowser } from '@angular/common';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-giveaway-proteccion-hey',
  templateUrl: './giveaway-proteccion-hey.component.html',
  styleUrls: ['./giveaway-proteccion-hey.component.css']
})
export class GiveawayProteccionHeyComponent implements OnInit, AfterViewInit {

  constructor(
    private confirmModalService: ConfirmModalService,
    private giveawayService: GiveawayParticipacionReferidosService,
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) public platformId: Object
    ) {
  }
  RECAPTCHA_KEY;
  host: string;
  environment = environment;
  public STATIC = GiveawayProteccionHeyComponent;
  cookie: string;
  busy = false;
  public codigo: string = null;

  contador = 0;
  contadorCarago = false;
  rangoGiveaway;
  public type = 'ALTA';
  public errorMessage = '';
  public folio = '0';
  public exito = false;

  @ViewChild(RecaptchaComponent) recaptchaComponent: RecaptchaComponent;

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)){
      this.host = window.location.hostname;
    }
    if (this.host === 'heybanco.com' || this.host === 'www.heybanco.com') {
      this.RECAPTCHA_KEY = '6LfWEOUZAAAAAM8qZL8f39_yUAU02Yv1064GvIIn';
    } else {
      this.RECAPTCHA_KEY = '6LcG8uceAAAAAGPYY7wKbZAERYZ9naoTlrP1PWpV';
    }

    this.route.params.subscribe(params => {
      this.codigo = params['codigo'];
    });
  }

  ngAfterViewInit() {
    this.getContador();
  }

  public participar(type: string, recaptcha?: string) {
    if (type === 'ALTA' ) {
      this.submitRequest (recaptcha);
      return;
    }

    if (type === 'CONTADOR' ) {
      this.getContador (recaptcha);
      return;
    }

  }

  async submitRequest(recaptcha?: string) {
    if (this.busy) {
      return;
    }

    this.busy = true;
    if (recaptcha == null) {
      this.type = 'ALTA';
      this.busy = false;
      await this.recaptchaComponent.execute();
      return;
    }

    this.giveawayService.altaClaveGiveaway(this.codigo, recaptcha, this.host).subscribe((response) => {
      this.confirmModalService.showModal({
        title: '¡Tu registro se realizó con éxito!',
        message: 'Revisa tu correo para conocer más información.'
      });
      this.busy = false;
      this.folio = response.numeroClick.toString();
      this.exito = true;
      this.getContador();
    }, (error) => {
      this.busy = false;
      this.confirmModalService.showModal({
        title: '¡Ocurrio un problema!',
        message: error.message
      });
      console.log('ERROR DE LA ALTA DE GIVEAWAY', error);
    });

  }

  getContador(recaptcha?: string) {
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

    this.giveawayService.contadorGiveaway(this.codigo, recaptcha, this.host).subscribe( response => {
      this.contador = response.contadorAux;
      this.rangoGiveaway = response.rango;
      this.busy = false;
    });
  }
}
