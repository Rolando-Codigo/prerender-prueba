import { Component, OnInit, ViewChild, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecaptchaComponent } from 'ng-recaptcha';
import { GiveawayParticipacionAhorroCategoriaService } from 'src/app/services/giveaway-participacion-ahorro-categoria.service';
import { ConfirmModalService } from 'src/app/components/confirm-modal/confirm-modal.service';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { isPlatformBrowser } from '@angular/common';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-giveaway-ahorro-categorias',
  templateUrl: './giveaway-ahorro-categorias.component.html',
  styleUrls: ['./giveaway-ahorro-categorias.component.css']
})
export class GiveawayAhorroCategoriasComponent implements OnInit, AfterViewInit {

  environment = environment;
  form: FormGroup;
  categorias: Array<any>;
  busy = false;
  host: string;
  RECAPTCHA_KEY;
  public STATIC = GiveawayAhorroCategoriasComponent;
  public type = 'ALTA';

  constructor(
    private _formBuilder: FormBuilder,
    private giveawayService: GiveawayParticipacionAhorroCategoriaService,
    private confirmModalService: ConfirmModalService,
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
      correo: [null, [Validators.required]],
      nombre: [null, [Validators.required]],
      numeroCuenta: [null, [Validators.required]],
      tipoAhorroGiveaway: [null, [Validators.required]],
      avisoPrivacidad: [null, [Validators.required]]
    });

    // this.recaptchaComponent.execute();

    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Triplica tu Ahorro con Hey Banco');
    this.metaTagsService.setMetaDescription('Incrementa tus ahorros y llega a tus metas con Hey Ahorra. Regístrate y participa para doblar o hasta triplicar tu dinero acumulado.');
  }

  ngAfterViewInit() {
    this.getContador();
  }

  public participar(type: string, recaptcha?: string) {
    if (type === 'ALTA') {
      this.submitRequest(recaptcha);
      return;
    }

    if (type === 'CONTADOR') {
      this.getContador(recaptcha);
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

    const formParticipacion = this.form.value;
    formParticipacion.layout = 'participacion_ahorro_hey';

    console.log(formParticipacion);

    this.giveawayService.alta(formParticipacion, recaptcha, this.host).subscribe( response => {
      this.confirmModalService.showModal({
        title: '¡Tu registro se realizó con éxito!',
        message: 'Revisa tu correo para conocer más información.'
      });
      this.busy = false;
      // this.form.reset();
    }, (error) => {
      console.log(error);
      this.busy = false;
      const message = 'Error en la alta de participación.';
      this.confirmModalService.showModal({
        title: message,
        message: error.message
      });
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
    } else {
      this.busy = false;
    }

    this.giveawayService.categorias(recaptcha, this.host).subscribe( response => {
      // this.contador = response.contadorAux;
      console.log(response);
      this.categorias = response;
      this.busy = false;
    });
  }

}
