import {Component, OnInit, ViewChild} from '@angular/core';
import {IvrBaseComponent} from '../../ivr-base-component';
import {IvrService} from '../../ivr.service';
import {SugerenciaIvr} from '../../sugerencia-ivr';
import {FormControl, Validators} from '@angular/forms';
import {RecaptchaComponent} from 'ng-recaptcha';
import { environment } from '../../../environments/environment';
import { categoriasReportesFalla } from 'src/app/models/categorias_reportes_fallas.model';
import { MetaTagsService } from 'src/app/services/meta-tags.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-ivr-sugerencia',
  templateUrl: './ivr-sugerencia.component.html'
})
export class IvrSugerenciaComponent extends IvrBaseComponent implements OnInit {

  environment = environment;
  public model = new SugerenciaIvr();

  public MODEL = SugerenciaIvr;
  public STATIC = IvrSugerenciaComponent;

  public commentsForm = new FormControl('', [Validators.required]);
  public tipoProductoForm = new FormControl('', [Validators.required]);
  public motivoCasoProductoForm = new FormControl('', [Validators.required]);

  categoriasR = categoriasReportesFalla;

  @ViewChild(RecaptchaComponent) recaptchaComponent: RecaptchaComponent;

  constructor(private ivrService: IvrService,
    private metaTagsService : MetaTagsService) {
    super();

    this.identifier = SugerenciaIvr.CARD;

    // SE USAN PARA 'TRADUCIR' los parametros a legible por humanos
    this.IDENTIFIER_VALUES_TEXT[SugerenciaIvr.PRODUCT] = 'Producto';

    // PLANTILLAS PARA PRESENTAR MESNAJES
    this.MESSAGES['success'] = 'Se ha enviado tu sugerencia con éxito';
    this.MESSAGES['error'] = 'Error al intentar enviar tu sugerencia';

    this.form.addControl(SugerenciaIvr.COMMENTS, this.commentsForm);
    this.form.addControl(SugerenciaIvr.TIPOPRODUCTO, this.tipoProductoForm);
    this.form.addControl(SugerenciaIvr.MOTIVOCASO, this.motivoCasoProductoForm);
  }

  ngOnInit() {
    this.initializeModal();
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Buzón Sugerencias de mejora Hey Banco');
    this.metaTagsService.setMetaDescription('Trabajamos constantemente para mejorar nuestro servicio. ¿Consideras que hay algo que debamos mejorar? ¡Escríbenos!');
  }

  public submitForm(event) {
    if (!this.isValidForm) {
      return;
    }

    if (!this.captcha.valid) {
      this.recaptchaComponent.execute();
      return;
    }

    if (this.busy) {
      return;
    }
    this.busy = true;

    this.model.accountNumber = '';
    this.model.phoneNumber = '';
    this.model.card = '';
    this.model.email = '';
    this.model.name = '';
    this.model.comments = this.commentsForm.value;
    this.model.recaptcha_token = this.captcha.value;
    this.model.motivoCaso = this.motivoCasoProductoForm.value;
    this.model.tipoCaso = this.tipoProductoForm.value.nombre;

    switch (this.identifier) {
      case SugerenciaIvr.CARD:
        this.model.card = this.cardForm.value;
        break;
      case SugerenciaIvr.ACCOUNT_NUMBER:
        this.model.accountNumber = this.accountNumberForm.value;
        break;
      case SugerenciaIvr.PHONE_NUMBER:
        this.model.phoneNumber = this.phoneNumberForm.value;
        break;
      default:
        break;
    }

    if (this.isEmailRequired) {
      this.model.email = this.emailForm.value;
      this.model.name = this.nameForm.value;
    }

    this.sendSugerencia();
  }

  public sendSugerencia() {
    this.ivrService.sendSugerencia(this.model).subscribe(
      next => {
        this.clear();
        this.busy = false;
        this.showModal(IvrSugerenciaComponent.MODAL_TYPE_SUCCESS);
      },
      error => {
        this.recaptchaComponent.reset();
        if (error.status_code === 401) {
          this.requireEmail = true;
          this.showModal(IvrSugerenciaComponent.MODAL_TYPE_EMAIL);
          this.busy = false;
          return;
        }
        this.showModal(IvrSugerenciaComponent.MODAL_TYPE_ERROR);
        if (error.error) {
          error = this.getErrorMessagesFromErrorResponse(error);
        }
        this.busy = false;
      });
  }

  public getErrorMessageFromError(value: object, key: string, type: string): object {
    switch (type) {
      case IvrService.ERROR_TYPE_REQUIRED_WITH:
      case IvrService.ERROR_TYPE_REQUIRED_WITHOUT:
      case IvrService.ERROR_TYPE_REQUIRED_WITH_ALL:
      case IvrService.ERROR_TYPE_REQUIRED_WITHOUT_ALL:
        for (let i = 0; i < value['values'].length; i++) {
          value['values'][i] = this.IDENTIFIER_VALUES_TEXT[value['values'][i]];
        }
        break;
      default:
        break;
    }
    switch (key) {
      default:
        value = super.getErrorMessageFromError(value, this.IDENTIFIER_VALUES_TEXT[key], type);
    }
    console.log(value['message']);
    return value;
  }

  public get isValidForm(): boolean {
    return super.validateForm() && this.tipoProductoForm.valid && this.motivoCasoProductoForm.valid  && this.commentsForm.valid;
  }

  public clear() {
    this.clearing = true;
    super.clear();
    this.model.clear();

    this.commentsForm.reset();
    this.recaptchaComponent.reset();
    this.tipoProductoForm.reset();
    this.motivoCasoProductoForm.reset();

    this.form.reset();
  }

}
