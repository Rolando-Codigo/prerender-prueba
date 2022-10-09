import { Component, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecaptchaComponent } from 'ng-recaptcha';
import { ConfirmModalService } from 'src/app/components/confirm-modal/confirm-modal.service';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { EmbajadoresHeyService } from 'src/app/services/embajadores-hey.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-promocional-embajadores',
  templateUrl: './promocional-embajadores.component.html',
  styleUrls: ['./promocional-embajadores.component.css']
})
export class PromocionalEmbajadoresComponent implements OnInit {

  RECAPTCHA_KEY: any;
  host: string;

  public STATIC = PromocionalEmbajadoresComponent;
  environment = environment;
  cookie: string;
  form: FormGroup;
  busy = false;
  public type = 'ALTA';

  constructor(
    private _formBuilder: FormBuilder,
    private confirmModalService: ConfirmModalService,
    private embajadoresHeyService: EmbajadoresHeyService,
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

      this.form = this._formBuilder.group({
        correoEmbajador: [null, [Validators.required, Validators.email]],
        nombreReferido: [null, [Validators.required]],
        correoReferido: [null, [Validators.required, Validators.email]],
        aceptoTerminos: [null, [Validators.required]],
      });
    }


  @ViewChild(RecaptchaComponent) recaptchaComponent: RecaptchaComponent;

  ngOnInit(): void {
    console.log('CAMBIOOOOS');



    // solicitar el contador
    setTimeout(() => {
      this.embajadoresHeyService.alta({
        correoEmbajador: this.form.value.correoEmbajador,
        correoReferido: this.form.value.correoReferido,
        promocional: 'participacion_embajadores_hey',
        nombreReferido: this.form.value.nombreReferido
      }, 'laskdjklasjd', this.host);
      this.recaptchaComponent.execute();
    }, 300);
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Embajadores Hey Banco | Invita a tus amigos');
    this.metaTagsService.setMetaDescription('Invita a tus amigos a abrir una Cuenta Hey o cambiar su nómina con nosotros y por cadareferido exitoso obtienes incentivos.');
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
          promocional: 'participacion_embajadores_hey',
          nombreReferido: this.form.value.nombreReferido
        };

        this.embajadoresHeyService.alta(referido, recaptcha, this.host).subscribe( response =>  {
          this.confirmModalService.showModal({
            title: '¡Listo!Tu amig@ ya fue invitado abrir una Cuenta Hey.',
            message: 'El monto acumulado por referidos que completen el proceso se depositará en tu Cuenta Hey al inicio de cada mes.'
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
