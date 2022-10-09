import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FallaIvr} from '../../falla-ivr';
import {IvrService} from '../../ivr.service';
import {IvrBaseComponent} from '../../ivr-base-component';
import {ImagenIvr} from '../../imagen-ivr';
import {FormControl, Validators} from '@angular/forms';
import {RecaptchaComponent} from 'ng-recaptcha';
import { environment } from '../../../environments/environment';
import { categoriasReportesFalla } from 'src/app/models/categorias_reportes_fallas.model';
import { MetaTagsService } from 'src/app/services/meta-tags.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-ivr-fallas',
  templateUrl: './ivr-fallas.component.html'
})
export class IvrFallasComponent extends IvrBaseComponent implements OnInit {

  public get versions() {
    return this.osForm.value === FallaIvr.OS_ANDROID ? FallaIvr.APP_VERSIONS_ANDROID : FallaIvr.APP_VERSIONS_IOS;
  }

  // centro de ayuda

  constructor(private ivrService: IvrService,
    private metaTagsService : MetaTagsService) {
    super();

    this.identifier = FallaIvr.CARD;

    // SE USAN PARA 'TRADUCIR' los parametros a legible por humanos
    this.IDENTIFIER_VALUES_TEXT[FallaIvr.DESCRIPTION] = 'Descripción de la falla';
    this.IDENTIFIER_VALUES_TEXT[FallaIvr.DEVICE] = 'Modelo de Celular';
    this.IDENTIFIER_VALUES_TEXT[FallaIvr.APP_VERSION] = 'Versión de App';
    this.IDENTIFIER_VALUES_TEXT[FallaIvr.OS] = 'Sistema operativo de tu celular';
    this.IDENTIFIER_VALUES_TEXT[FallaIvr.EVIDENCE] = 'Imagen 1';
    this.IDENTIFIER_VALUES_TEXT[FallaIvr.EVIDENCE_REFERENCE] = 'Referencia de la imagen 1';
    this.IDENTIFIER_VALUES_TEXT[FallaIvr.EVIDENCE_EXTENSION] = 'Extencion de la imagen 1';
    this.IDENTIFIER_VALUES_TEXT[FallaIvr.EVIDENCE_2] = 'Imagen 2';
    this.IDENTIFIER_VALUES_TEXT[FallaIvr.EVIDENCE_2_REFERENCE] = 'Referencia de la imagen 2';
    this.IDENTIFIER_VALUES_TEXT[FallaIvr.EVIDENCE_2_EXTENSION] = 'Extencion de la imagen 2';
    this.IDENTIFIER_VALUES_TEXT[FallaIvr.EVIDENCE_3] = 'Imagen 3';
    this.IDENTIFIER_VALUES_TEXT[FallaIvr.EVIDENCE_3_REFERENCE] = 'Referencia de la imagen 3';
    this.IDENTIFIER_VALUES_TEXT[FallaIvr.EVIDENCE_3_EXTENSION] = 'Extencion de la imágen 3';
    this.IDENTIFIER_VALUES_TEXT[FallaIvr.EVIDENCE_4] = 'Imagen 4';
    this.IDENTIFIER_VALUES_TEXT[FallaIvr.EVIDENCE_4_REFERENCE] = 'Referencia de la imagen 4';
    this.IDENTIFIER_VALUES_TEXT[FallaIvr.EVIDENCE_4_EXTENSION] = 'Extencion de la imagen 4';

    this.IDENTIFIER_VALUES_TEXT[IvrFallasComponent.TYPE_APP] = 'Falla en la App';
    this.IDENTIFIER_VALUES_TEXT[IvrFallasComponent.TYPE_OTHER] = 'Otro tipo de Falla';

    this.IDENTIFIER_VALUES_TEXT[FallaIvr.OS_IOS] = 'iOS';
    this.IDENTIFIER_VALUES_TEXT[FallaIvr.OS_ANDROID] = 'Android';

    // PLANTILLAS PARA PRESENTAR MESNAJES
    this.MESSAGES['success'] = 'Se ha enviado el reporte de falla con éxito';
    this.MESSAGES['error'] = 'Error al intentar enviar reporte de falla';

    this.typeForm.valueChanges.subscribe(type => {
      this.osForm.setValidators(null);
      this.deviceForm.setValidators(null);
      this.appVersionForm.setValidators(null);
      this.tipoProductoForm.setValidators(null);
      this.motivoCasoProductoForm.setValidators(null);

      switch (type) {
        case IvrFallasComponent.TYPE_APP:
          this.osForm.setValidators([
            Validators.required,
          ]);
          this.deviceForm.setValidators([
            Validators.required,
          ]);
          this.appVersionForm.setValidators([
            Validators.required,
          ]);

          this.tipoProductoForm.setValidators([
            Validators.required,
          ]);
          this.motivoCasoProductoForm.setValidators([
            Validators.required,
          ]);
          break;
        default:
          break;
      }
      this.osForm.updateValueAndValidity();
      this.deviceForm.updateValueAndValidity();
      this.appVersionForm.updateValueAndValidity();
      this.tipoProductoForm.updateValueAndValidity();
      this.motivoCasoProductoForm.updateValueAndValidity();
    });

    this.form.addControl(FallaIvr.OS, this.osForm);
    this.form.addControl(FallaIvr.DEVICE, this.deviceForm);
    this.form.addControl(FallaIvr.APP_VERSION, this.appVersionForm);
    this.form.addControl(FallaIvr.DESCRIPTION, this.descriptionForm);
    this.form.addControl(FallaIvr.TIPOPRODUCTO, this.tipoProductoForm);
    this.form.addControl(FallaIvr.MOTIVOCASO, this.motivoCasoProductoForm);
  }

  public get isValidForm(): boolean {
    return super.validateForm() && this.osForm.valid && this.deviceForm.valid
      && this.appVersionForm.valid && this.descriptionForm.valid;
      // && !this.evidenceError && !this.evidence2Error
      // && !this.evidence3Error && !this.evidence4Error;
  }
  static TYPE_APP = 'type_app';
  static TYPE_OTHER = 'type_other';
  static TYPES = [
    IvrFallasComponent.TYPE_APP,
    IvrFallasComponent.TYPE_OTHER,
  ];

  environment = environment;

  public model = new FallaIvr();

  public MODEL = FallaIvr;
  public STATIC = IvrFallasComponent;

  public type = IvrFallasComponent.TYPE_APP;

  public osForm = new FormControl(FallaIvr.OS_IOS, [Validators.required]);
  public deviceForm = new FormControl('', [Validators.required]);
  public appVersionForm = new FormControl(FallaIvr.APP_VERSIONS_IOS[0], [Validators.required]);
  public typeForm = new FormControl(this.type);
  public descriptionForm = new FormControl(this.model.description, [Validators.required]);
  public tipoProductoForm = new FormControl('', [Validators.required]);
  public motivoCasoProductoForm = new FormControl('', [Validators.required]);

  public evidenceError: string = null;
  public evidence2Error: string = null;
  public evidence3Error: string = null;
  public evidence4Error: string = null;

  categoriasR = categoriasReportesFalla;

  @ViewChild(RecaptchaComponent) recaptchaComponent: RecaptchaComponent;

  @ViewChild('evidenceFile') evidenceFile: ElementRef;
  @ViewChild('evidence2File') evidence2File: ElementRef;
  @ViewChild('evidence3File') evidence3File: ElementRef;
  @ViewChild('evidence4File') evidence4File: ElementRef;

  ngOnInit() {
    this.initializeModal();
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Reporta la falla de tu app Hey Banco');
    this.metaTagsService.setMetaDescription('¿Fallas con tu App Hey Banco? Crea un reporte por fallas. Cuéntanos el motivo de tu caso a detalle y sube la evidencia necesaria para ayudarte.');
  }

  public submitForm(form) {
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
    this.model.device = '';
    this.model.os = '';
    this.model.appVersion = '';
    this.model.recaptcha_token = this.captcha.value;

    if (this.type === IvrFallasComponent.TYPE_APP) {
      this.model.device = this.deviceForm.value;
      this.model.os = this.osForm.value;
      this.model.appVersion = this.appVersionForm.value;
      this.model.tipoCaso = this.tipoProductoForm.value.nombre;
      this.model.motivoCaso = this.motivoCasoProductoForm.value;
    }

    switch (this.identifier) {
      case FallaIvr.CARD:
        this.model.card = this.cardForm.value;
        break;
      case FallaIvr.ACCOUNT_NUMBER:
        this.model.accountNumber = this.accountNumberForm.value;
        break;
      case FallaIvr.PHONE_NUMBER:
        this.model.phoneNumber = this.phoneNumberForm.value;
        break;
      default:
        break;
    }

    if (this.isEmailRequired) {
      this.model.email = this.emailForm.value;
      this.model.name = this.nameForm.value;
    }

    this.sendEvidence();
  }

  public sendEvidence() {
    if (!this.model.evidence.reference && this.model.evidence.payload) {
      this.ivrService.sendImagen(this.model.evidence).subscribe(
        next => {
          if (!next.data || !next.data.reference) {
            this.busy = false;
            return;
          }
          this.model.evidence.reference = next.data.reference;
          this.sendEvidence2();
        },
        error => {
          // window.alert('Error al intentar enviar la imagen 1');
          this.showModal(IvrFallasComponent.MODAL_TYPE_ERROR);
          this.busy = false;
        },
      );
      return;
    }

    this.sendEvidence2();
  }

  public sendEvidence2() {
    if (!this.model.evidence2.reference && this.model.evidence2.payload) {
      this.ivrService.sendImagen(this.model.evidence2).subscribe(
        next => {
          if (!next.data || !next.data.reference) {
            this.busy = false;
            return;
          }
          this.model.evidence2.reference = next.data.reference;
          this.sendEvidence3();
        },
        error => {
          // window.alert('Error al intentar enviar la imagen 2');
          this.showModal(IvrFallasComponent.MODAL_TYPE_ERROR);
          this.busy = false;
        },
      );
      return;
    }

    this.sendEvidence3();
  }

  public sendEvidence3() {
    if (!this.model.evidence3.reference && this.model.evidence3.payload) {
      this.ivrService.sendImagen(this.model.evidence3).subscribe(
        next => {
          if (!next.data || !next.data.reference) {
            this.busy = false;
            return;
          }
          this.model.evidence3.reference = next.data.reference;
          this.sendEvidence4();
        },
        error => {
          // window.alert('Error al intentar enviar la imagen 3');
          this.showModal(IvrFallasComponent.MODAL_TYPE_ERROR);
          this.busy = false;
        },
      );
      return;
    }

    this.sendEvidence4();
  }

  public sendEvidence4() {
    if (!this.model.evidence4.reference && this.model.evidence4.payload) {
      this.ivrService.sendImagen(this.model.evidence4).subscribe(
        next => {
          if (!next.data || !next.data.reference) {
            this.busy = false;
            return;
          }
          this.model.evidence4.reference = next.data.reference;
          this.sendFalla();
        },
        error => {
          // window.alert('Error al intentar enviar la imagen 4');
          this.showModal(IvrFallasComponent.MODAL_TYPE_ERROR);
          this.busy = false;
        },
      );
      return;
    }

    this.sendFalla();
  }

  public sendFalla() {
    this.ivrService.sendFalla(this.model).subscribe(
      next => {
        this.clear();
        this.busy = false;
        this.showModal(IvrFallasComponent.MODAL_TYPE_SUCCESS);
      },
      error => {
        this.recaptchaComponent.reset();
        this.busy = false;
        if (error.status_code === 401) {
          this.requireEmail = true;
          this.showModal(IvrFallasComponent.MODAL_TYPE_EMAIL);
        } else {
          this.showModal(IvrFallasComponent.MODAL_TYPE_ERROR);
          if (error.error) {
            error = this.getErrorMessagesFromErrorResponse(error);
          }
        }

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

  public fileChanged(image: ImagenIvr, type: string) {
    switch (type) {
      case FallaIvr.EVIDENCE:
          this.model.evidence = image;
          this.evidenceError = null;
          this.evidenceFile.nativeElement.value = '';
        break;
        case FallaIvr.EVIDENCE_2:
          this.model.evidence2 = image;
          this.evidence2Error = null;
          this.evidence2File.nativeElement.value = '';
        break;
        case FallaIvr.EVIDENCE_3:
          this.model.evidence3 = image;
          this.evidence3Error = null;
          this.evidence3File.nativeElement.value = '';
        break;
        case FallaIvr.EVIDENCE_4:
          this.model.evidence4 = image;
          this.evidence4Error = null;
          this.evidence4File.nativeElement.value = '';
        break;
      default:
        break;
    }
  }

  public fileChangeError(error: string, type: string, file: File) {
    switch (type) {
      case FallaIvr.EVIDENCE:
        this.evidenceError = error;
        break;
        case FallaIvr.EVIDENCE_2:
        this.evidence2Error = error;
        break;
        case FallaIvr.EVIDENCE_3:
        this.evidence3Error = error;
        break;
        case FallaIvr.EVIDENCE_4:
        this.evidence4Error = error;
        break;
      default:
        break;
    }
  }

  public removeFile(file: ImagenIvr, type: string) {
    super.removeFile(file, type);
    switch (type) {
      case FallaIvr.EVIDENCE:
        this.evidenceError = null;
        break;
      case FallaIvr.EVIDENCE_2:
        this.evidence2Error = null;
        break;
      case FallaIvr.EVIDENCE_3:
        this.evidence3Error = null;
        break;
      case FallaIvr.EVIDENCE_4:
        this.evidence4Error = null;
        break;
      default:
        break;
    }
  }

  public clear() {
    this.clearing = true;
    super.clear();
    this.model.clear();

    this.osForm.reset(FallaIvr.OS_IOS);
    this.deviceForm.reset('');
    this.appVersionForm.reset(FallaIvr.APP_VERSIONS[0]);
    this.descriptionForm.reset();
    this.typeForm.updateValueAndValidity();
    this.recaptchaComponent.reset();
    this.motivoCasoProductoForm.reset();
    this.tipoProductoForm.reset();

    this.evidenceError = null;
    this.evidence2Error = null;
    this.evidence3Error = null;
    this.evidence4Error = null;

    setTimeout(() => {
      this.clearing = false;
    });
    this.form.reset();
  }

  cambio() {
    console.log(this.tipoProductoForm.value);
  }
}
