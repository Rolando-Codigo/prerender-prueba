import { Component, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ConfirmModalService } from 'src/app/components/confirm-modal/confirm-modal.service';
import { RecaptchaComponent } from 'ng-recaptcha';
import { EmbajadoresHeyService } from 'src/app/services/embajadores-hey.service';
import { isPlatformBrowser } from '@angular/common';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-registro-embajadores',
  templateUrl: './giveaway-registro-embajadores.component.html',
  styleUrls: ['./giveaway-registro-embajadores.component.css']
})
export class GiveawayRegistroEmbajadoresComponent implements OnInit {

  RECAPTCHA_KEY;
  host: string;
  public STATIC = GiveawayRegistroEmbajadoresComponent;
  environment = environment;
  cookie: string;
  form: FormGroup;
  busy = false;
  public type = 'ALTA';

  constructor(
    private _formBuilder: FormBuilder,
    private confirmModalService: ConfirmModalService,
    private embajadoresHeyService: EmbajadoresHeyService,
    @Inject(PLATFORM_ID) public platformId: Object
    ) {
      if(isPlatformBrowser(this.platformId)){
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
      correoEmbajador: [null, [Validators.required, Validators.email]],
      nombreEmbajador: [null, [Validators.required]],
      nombreReferido: [null, [Validators.required]],
      correoReferido: [null, [Validators.required, Validators.email]],
      aceptoTerminos: [null, [Validators.required]],
    });

    // solicitar el contador
    setTimeout(() => {
      this.recaptchaComponent.execute();
    }, 300);
  }


  public participar(type: string, recaptcha?: string) {
    if (type === 'ALTA' ) {
      this.submitRequest (recaptcha);
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

    // validar formulario
    const formParticipacion = this.form.value;

    if (
      formParticipacion.correoEmbajador != null && formParticipacion.correoEmbajador !== ''
      && formParticipacion.correoReferido != null && formParticipacion.correoReferido !== '') {

        const referido = {
          correoEmbajador: this.form.value.correoEmbajador,
          correoReferido: this.form.value.correoReferido,
          promocional: 'registro_referidos',
          nombreReferido: this.form.value.nombreReferido,
          nombreEmbajador: this.form.value.nombreEmbajador
        };

        this.embajadoresHeyService.alta(referido, recaptcha, this.host).subscribe( response =>  {
          this.confirmModalService.showModal({
            title: '¡Listo! Tu registro fue exitoso.',
            message: 'Hemos recibido tu información.'
          });
          this.form.reset();
          this.busy = false;
        }, (error) => {
          this.busy = false;
          this.confirmModalService.showModal({
            title: 'Ocurrio un error',
            message: 'Error en la alta de referido.'
          });
        });
      } else {
        this.busy = false;
      }
  }

}
