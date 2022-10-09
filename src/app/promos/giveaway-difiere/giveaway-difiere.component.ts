import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmModalService } from 'src/app/components/confirm-modal/confirm-modal.service';
import { RecaptchaComponent } from 'ng-recaptcha';
import { GiveawayParticipacionReembolsoService } from 'src/app/services/giveaway-participacion-reembolso.service';
import { GiveawayParticipacionReferidosService } from 'src/app/services/giveaway-participacion-referidos.service';
import { ActivatedRoute } from '@angular/router';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { isPlatformBrowser } from '@angular/common';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-giveaway-difiere',
  templateUrl: './giveaway-difiere.component.html',
  styleUrls: ['./giveaway-difiere.component.css']
})
export class GiveawayDifiereComponent implements OnInit, AfterViewInit {

  environment = environment;
  form: FormGroup;
  RECAPTCHA_KEY;
  busy = false;
  host: string;
  public codigo: string = '';
  private parameterSubscription: any;
  rangoGiveaway: any;
  public STATIC = GiveawayDifiereComponent;
  public type = 'ALTA';

  constructor(
    private _formBuilder: FormBuilder,
    private confirmModalService: ConfirmModalService,
    private giveawayParticipacionReembolsoService: GiveawayParticipacionReembolsoService,
    private giveawayService: GiveawayParticipacionReferidosService,
    private route: ActivatedRoute,
    private metaTagsService : MetaTagsService,
    @Inject(PLATFORM_ID) public platformId: Object
    ) {

      if (isPlatformBrowser(this.platformId)) {
          this.host = window.location.hostname;
      }
      if (this.host === 'heybanco.com' || this.host === 'www.heybanco.com') {
        this.RECAPTCHA_KEY = '6LfWEOUZAAAAAM8qZL8f39_yUAU02Yv1064GvIIn';
      } else {
        this.RECAPTCHA_KEY = '6LcG8uceAAAAAGPYY7wKbZAERYZ9naoTlrP1PWpV';
      }
  }

  @ViewChild(RecaptchaComponent) recaptchaComponent: RecaptchaComponent;

  ngOnInit(): void {


    this.form = this._formBuilder.group({
      rfc: [null, [Validators.required, Validators.maxLength(13)]],
      numeroCuenta: [null, [Validators.required, Validators.maxLength(12)]],
      comercio: [null, [Validators.required]],
      monto: [null, [Validators.required]],
      fechaHoraCompra: [null, [Validators.required]],
      plazo: [null, [Validators.required]],
    });

    this.parameterSubscription = this.route.params.subscribe(params => {
      this.codigo = params['codigo'];
    });

    setTimeout(() => {
      this.recaptchaComponent.execute();
    }, 3);

    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Meses Sin Intereses en tus compras | Hey Banco');
    this.metaTagsService.setMetaDescription('Paga con tu Tarjeta de Crédito Hey en tienda física o en línea, registra tu compra de más de $1,000 pesos y difiere a 3 o 6 Meses sin Intereses.');
  }

  ngAfterViewInit() {
    this.getContador();
  }

  public participar(type: string, recaptcha?: string) {
    if (type === 'ALTA' ) {
      console.log('Captcha: ' + recaptcha);
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
      // console.log(this.type);
      this.busy = false;
      console.log('entre if recaptcha');
      await this.recaptchaComponent.execute();
      return;
    }

    // validar formulario


    /*if (
      formParticipacion.nombreCompleto != null && formParticipacion.nombreCompleto !== ''
      && formParticipacion.numeroCuenta != null && formParticipacion.numeroCuenta !== '') {*/

      if (this.form.valid) {
        // enviar participacion
        const formParticipacion = this.form.value;
        formParticipacion.rango = this.rangoGiveaway;
        formParticipacion.fechaHora = new Date();
        formParticipacion.fechaHoraCompra = new Date(formParticipacion.fechaHoraCompra);
        formParticipacion.tipoCompra = '';
        formParticipacion.codigo = this.codigo;
        formParticipacion.rfc = formParticipacion.rfc.toUpperCase();
        this.giveawayParticipacionReembolsoService.alta(formParticipacion, recaptcha, this.host).subscribe( response => {
          this.confirmModalService.showModal({
            title: '¡Tu registro se realizó con éxito!',
            message: 'Revisa tu correo para conocer más información.'
          });
          this.busy = false;
          // this.getContador();
          // this.form.reset();
        }, (error) => {
          console.log(error);
          this.busy = false;
          const message = 'Error en la alta de participación.';
          /*if (error.message === '¡Conviértete en Hey Pro y participa!') {
              message = 'Realiza 6 compras durante el mes con tu cuenta verificada para participar el próximo mes.';
          }*/
          this.confirmModalService.showModal({
            title: message,
            message: error.message
          });
        });
      }
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
      // this.contador = response.contadorAux;
      this.rangoGiveaway = response.rango;
      console.log(response);
      this.busy = false;
    });
  }

}
