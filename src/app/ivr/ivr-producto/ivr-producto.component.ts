import {Component, OnInit, ViewChild} from '@angular/core';
import {IvrBaseComponent} from '../../ivr-base-component';
import {IvrService} from '../../ivr.service';
import {AsesoriaIvr} from '../../asesoria-ivr';
import {FormControl, Validators} from '@angular/forms';
import {RecaptchaComponent} from 'ng-recaptcha';
import { environment } from '../../../environments/environment';
import { categoriasReportesFalla } from 'src/app/models/categorias_reportes_fallas.model';
import { MetaTagsService } from 'src/app/services/meta-tags.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-ivr-producto',
  templateUrl: './ivr-producto.component.html'
})
export class IvrProductoComponent extends IvrBaseComponent implements OnInit {

  environment = environment;
  public model = new AsesoriaIvr();

  public MODEL = AsesoriaIvr;
  public STATIC = IvrProductoComponent;

  categoriasR = categoriasReportesFalla;

  public commentsForm = new FormControl('', [Validators.required]);

  public tipoProductoForm = new FormControl('', [Validators.required]);
  public motivoCasoProductoForm = new FormControl('', [Validators.required]);

  @ViewChild(RecaptchaComponent) recaptchaComponent: RecaptchaComponent;

  constructor(private ivrService: IvrService,
    private metaTagsService : MetaTagsService) {
    super();

    this.identifier = AsesoriaIvr.CARD;

    // SE USAN PARA 'TRADUCIR' los parametros a legible por humanos
    this.IDENTIFIER_VALUES_TEXT[AsesoriaIvr.PRODUCT] = 'Producto';

    // PLANTILLAS PARA PRESENTAR MESNAJES
    this.MESSAGES['success'] = 'Se ha enviado tu sugerencia con éxito';
    this.MESSAGES['error'] = 'Error al intentar enviar tu sugerencia';

    // this.form.addControl(AsesoriaIvr.PRODUCT, this.productForm);
    this.form.addControl(AsesoriaIvr.COMMENTS, this.commentsForm);
    this.form.addControl(AsesoriaIvr.TIPOPRODUCTO, this.tipoProductoForm);
    this.form.addControl(AsesoriaIvr.MOTIVOCASO, this.motivoCasoProductoForm);
  }

  ngOnInit() {
    this.initializeModal();
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Asesoría de productos Hey');
    this.metaTagsService.setMetaDescription('¿Quieres conocer a profundidad alguno de nuestros productos? Escríbenos tus dudas y nosotros aclararemos cada una de ellas.');
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
    // this.model.product = this.productForm.value;
    this.model.comments = this.commentsForm.value;
    this.model.recaptcha_token = this.captcha.value;
    this.model.motivoCaso = this.motivoCasoProductoForm.value;
    this.model.tipoCaso = this.tipoProductoForm.value.nombre;

    switch (this.identifier) {
      case AsesoriaIvr.CARD:
        this.model.card = this.cardForm.value;
        break;
      case AsesoriaIvr.ACCOUNT_NUMBER:
        this.model.accountNumber = this.accountNumberForm.value;
        break;
      case AsesoriaIvr.PHONE_NUMBER:
        this.model.phoneNumber = this.phoneNumberForm.value;
        break;
      default:
        break;
    }

    if (this.isEmailRequired) {
      this.model.email = this.emailForm.value;
      this.model.name = this.nameForm.value;
    }

    this.sendAsesoria();
  }

  public sendAsesoria() {
    this.ivrService.sendAsesoria(this.model).subscribe(
      next => {
        this.clear();
        this.busy = false;
        this.showModal(IvrProductoComponent.MODAL_TYPE_SUCCESS);
      },
      error => {
        this.recaptchaComponent.reset();
        if (error.status_code === 401) {
          this.requireEmail = true;
          this.showModal(IvrProductoComponent.MODAL_TYPE_EMAIL);
          this.busy = false;
          return;
        }
        this.showModal(IvrProductoComponent.MODAL_TYPE_ERROR);
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
