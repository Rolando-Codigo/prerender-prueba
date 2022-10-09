import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecaptchaComponent } from 'ng-recaptcha';
import { ConfirmModalService } from 'src/app/components/confirm-modal/confirm-modal.service';
import { GiveawayParticipacionReembolsoService } from 'src/app/services/giveaway-participacion-reembolso.service';
import { environment } from 'src/environments/environment';
import { isPlatformBrowser } from '@angular/common';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-giveaway-participacion-rembolso',
  templateUrl: './giveaway-participacion-rembolso.component.html',
  styleUrls: ['./giveaway-participacion-rembolso.component.css']
})
export class GiveawayParticipacionRembolsoComponent implements OnInit, AfterViewInit {

  constructor(
    private _formBuilder: FormBuilder,
    private giveawayParticipacionReembolsoService: GiveawayParticipacionReembolsoService,
    private confirmModalService: ConfirmModalService,
    @Inject(PLATFORM_ID) public platformId: Object

  ) { }
  RECAPTCHA_KEY;
  host: string;
  public STATIC = GiveawayParticipacionRembolsoComponent;
  environment = environment;
  cookie: string;
  busy = false;

  contador = 0;
  form: FormGroup;
  contadorCarago = false;
  rangoGiveaway;
  public type = 'ALTA';


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

    this.form = this._formBuilder.group({
      nombreCompleto: [null, Validators.required],
      correo: [null, Validators.required],
      numeroCuenta: [null, Validators.required],
      comercio: [null, Validators.required],
      monto: [null, Validators.required],
      fechaHoraCompra: [null, Validators.required],
      tipoCompra: [null, Validators.required],
    });

    setTimeout(() => {
      this.recaptchaComponent.execute();
    }, 3);
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
      console.log(this.type);
      this.busy = false;
      await this.recaptchaComponent.execute();
      return;
    }

    // validar formulario
    const formParticipacion = this.form.value;

    if (
      formParticipacion.nombreCompleto != null && formParticipacion.nombreCompleto !== ''
      && formParticipacion.numeroCuenta != null && formParticipacion.numeroCuenta !== '') {

        // enviar participacion
        formParticipacion.rango = this.rangoGiveaway;
        formParticipacion.fechaHora = new Date();
        formParticipacion.fechaHoraCompra = new Date(formParticipacion.fechaHoraCompra);
        this.giveawayParticipacionReembolsoService.alta(formParticipacion, recaptcha, this.host).subscribe( response => {
          this.confirmModalService.showModal({
            title: '¡Tu registro se realizó con éxito!',
            message: 'Revisa tu correo para conocer más información.'
          });
          this.busy = false;
          this.getContador();
          // this.form.reset();
        }, (error) => {
          console.log(error);
          this.busy = false;
          let message = 'Error en la alta de participación.';
          if (error.message === '¡Conviértete en Hey Pro y participa!') {
              message = 'Realiza 6 compras durante el mes con tu cuenta verificada para participar el próximo mes.';
          }
          this.confirmModalService.showModal({
            title: message,
            message: 'Mantente al pendiente'
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

    this.giveawayParticipacionReembolsoService.contador(recaptcha, 'participacion_reembolso', this.host).subscribe( response => {
      this.contador = response.contadorAux;
      this.rangoGiveaway = response.rango;
      this.busy = false;
    });
  }

}
