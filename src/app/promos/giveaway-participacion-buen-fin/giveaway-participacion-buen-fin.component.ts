import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecaptchaComponent } from 'ng-recaptcha';
import { ConfirmModalService } from 'src/app/components/confirm-modal/confirm-modal.service';
import { GiveawayParticipacionBuenFinService } from 'src/app/services/giveaway-participacion-buenfin.service';
import { environment } from 'src/environments/environment';
import { isPlatformBrowser } from '@angular/common';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-giveaway-participacion-buen-fin',
  templateUrl: './giveaway-participacion-buen-fin.component.html',
  styleUrls: ['./giveaway-participacion-buen-fin.component.css']
})
export class GiveawayParticipacionBuenFinComponent implements OnInit, AfterViewInit {

  constructor(
    private _formBuilder: FormBuilder,
    private confirmModalService: ConfirmModalService,
    private giveawayParticipacionBuenFinService: GiveawayParticipacionBuenFinService,
    @Inject(PLATFORM_ID) public platformId: Object
    ) { }
  RECAPTCHA_KEY;
  host: string;
  public STATIC = GiveawayParticipacionBuenFinComponent;
  environment = environment;
  cookie: string;
  busy = false;


  form: FormGroup;
  contador = 0;
  contadorCarago = false;
  rangoGiveaway;
  public type = 'ALTA';

  listDates = [
    {
      date: new Date(2021, 11, 10),
      label: '10 de Noviembre',
    },
    {
      date: new Date(2021, 11, 11),
      label: '11 de Noviembre',
    },
    {
      date: new Date(2021, 11, 12),
      label: '12 de Noviembre',
    },
    {
      date: new Date(2021, 11, 13),
      label: '13 de Noviembre',
    },
    {
      date: new Date(2021, 11, 14),
      label: '14 de Noviembre',
    },
    {
      date: new Date(2021, 11, 15),
      label: '15 de Noviembre',
    },
    {
      date: new Date(2021, 11, 16),
      label: '16 de Noviembre',
    },
  ];

  @ViewChild(RecaptchaComponent) recaptchaComponent: RecaptchaComponent;

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)) {
      this.host = window.location.hostname;
    }
    if (this.host === 'heybanco.com' || this.host === 'www.heybanco.com') {
      this.RECAPTCHA_KEY = '6LfWEOUZAAAAAM8qZL8f39_yUAU02Yv1064GvIIn';
    } else {
      this.RECAPTCHA_KEY = '6LcG8uceAAAAAGPYY7wKbZAERYZ9naoTlrP1PWpV';
    }

    this.form = this._formBuilder.group({
      nombreCompleto: [null, Validators.required],
      numeroCuenta: [null, Validators.required],
      fechaHoraCompra: [null, Validators.required],
      comercio: [null, Validators.required],
      monto: [null, Validators.required],
      tipoCompra: [null, Validators.required],
      correo: [null, Validators.required],
    });

    // solicitar el contador
    setTimeout(() => {
      this.recaptchaComponent.execute();
    }, 300);
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
        this.giveawayParticipacionBuenFinService.alta(formParticipacion, recaptcha, this.host).subscribe( response => {
          this.confirmModalService.showModal({
            title: '¡Tu registro se realizó con éxito!',
            message: 'Revisa tu correo para conocer más información.'
          });
          this.busy = false;
          this.getContador();
        }, (error) => {
          this.busy = false;
          this.confirmModalService.showModal({
            title: 'Ocurrio un error',
            message: 'Error en la alta de participación.'
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

    this.giveawayParticipacionBuenFinService.contador(recaptcha, this.host).subscribe( response => {
      this.contador = response.contadorAux;
      this.rangoGiveaway = response.rango;
      this.busy = false;
    });
  }

  kUpNoAfiliado() {
    let nA = this.form.value.numeroCuenta;
    if ( nA != null) {
      nA = this.pad(nA, 12);
      this.form.patchValue({
        numeroCuenta: nA
      });
    }
  }


  pad(num, size) {
    num = num.toString();
    while (num.length < size) { num = '0' + num; }
    num = num.toString().slice(-12);
    return num;
  }
}
