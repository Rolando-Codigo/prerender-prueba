import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecaptchaComponent } from 'ng-recaptcha';
import { ConfirmModalService } from 'src/app/components/confirm-modal/confirm-modal.service';
import { GiveawayParticipacionReferidosService } from 'src/app/services/giveaway-participacion-referidos.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { environment } from '../../../environments/environment';
import { isPlatformBrowser } from '@angular/common';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-giveaway-participacion-nps',
  templateUrl: './giveaway-participacion-nps.component.html',
  styleUrls: ['./giveaway-participacion-nps.component.css']
})
export class GiveawayParticipacionNpsComponent implements OnInit, AfterViewInit {

  RECAPTCHA_KEY;
  host: string;
  environment = environment;
  // public STATIC = GiveawayParticipacionNpsComponent;
  cookie: string;
  busy = false;
  public codigo: string = '';

  contador = 0;
  contadorCarago = false;
  rangoGiveaway: any;
  public type = 'ALTA';
  public errorMessage = '';
  public folio = '0';
  public exito = false;

  constructor(
    private confirmModalService: ConfirmModalService,
    private giveawayService: GiveawayParticipacionReferidosService,
    private route: ActivatedRoute,
    private metaTagsService : MetaTagsService,
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

      this.cookie = '';
     }


  @ViewChild(RecaptchaComponent) recaptchaComponent: RecaptchaComponent;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.codigo = params['codigo'];
    });
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Giveaway iPhone 13 | Hey Banco ');
    this.metaTagsService.setMetaDescription('Obtén un iPhone 13 visitando un Punto Hey, platica con nuestros asesores, responde una encuesta y canjea un código para participar. ');
  }


  ngAfterViewInit() {
    this.getContador();
  }

  public participar(type: string, recaptcha?: string) {
    console.log('participar');
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
    console.log('submitRequest');
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
