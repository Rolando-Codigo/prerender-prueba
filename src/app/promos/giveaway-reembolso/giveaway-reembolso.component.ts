import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ConfirmModalService } from 'src/app/components/confirm-modal/confirm-modal.service';
import { PromocionalGeneralComponent } from 'src/app/promos/promocional-general';
import { GiveawayParticipacionReembolsoService } from 'src/app/services/giveaway-participacion-reembolso.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-giveaway-reembolso',
  templateUrl: './giveaway-reembolso.component.html',
  styleUrls: ['./giveaway-reembolso.component.css']
})
export class GiveawayReembolsoComponent extends PromocionalGeneralComponent implements OnInit, AfterViewInit {

  constructor(
    formBuilder: FormBuilder,
    confirmModalService: ConfirmModalService,
    route: ActivatedRoute,
    private giveawayService: GiveawayParticipacionReembolsoService,
    @Inject(PLATFORM_ID) public platformId: Object
  ) {
    super(formBuilder, confirmModalService, route, platformId);
  }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      nombreCompleto: [null, Validators.required],
      correo: [null, Validators.required],
      numeroCuenta: [null, Validators.required],
      comercio: [null, Validators.required],
      monto: [null, Validators.required],
      fechaHoraCompra: [null, Validators.required],
      tipoCompra: [null, Validators.required],
      bancoEmisor: [null, Validators.required],
      referenciaCompra: [null, Validators.required],
      aceptoTerminos: [null, Validators.required],
    });


  }

  ngAfterViewInit() {
    this.getContador();
  }

  async submitRequest(recaptcha?: string) {
    const validadCaptcha = await this.validarCaptcha('ALTA', recaptcha);
    if (validadCaptcha) {

      const formParticipacion = this.form.value;
      if (
        formParticipacion.nombreCompleto != null && formParticipacion.nombreCompleto !== ''
        && formParticipacion.numeroCuenta != null && formParticipacion.numeroCuenta !== '') {

          // enviar participacion
          formParticipacion.rango = this.rangoGiveaway;
          formParticipacion.fechaHora = new Date();
          formParticipacion.fechaHoraCompra = new Date(formParticipacion.fechaHoraCompra);
          this.giveawayService.alta(formParticipacion, recaptcha, this.host).subscribe( response => {
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
  }

  async getContador(recaptcha?: string) {
    const validadCaptcha = await this.validarCaptcha('CONTADOR', recaptcha);
    if (validadCaptcha) {
      this.giveawayService.contador(recaptcha, 'participacion_reembolso_tpv', this.host).subscribe( response => {
        this.contador = response.contadorAux;
        this.rangoGiveaway = response.rango;
        this.busy = false;
      });
    }
  }
}
