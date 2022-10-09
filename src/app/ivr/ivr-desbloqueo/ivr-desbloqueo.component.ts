import { Component } from '@angular/core';
import {DesbloqueoIvr} from '../../desbloqueo-ivr';
import {IvrService} from '../../ivr.service';
import {IvrBaseComponent} from '../../ivr-base-component';
import {ImagenIvr} from '../../imagen-ivr';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-ivr-desbloqueo',
  templateUrl: './ivr-desbloqueo.component.html'
})
export class IvrDesbloqueoComponent extends IvrBaseComponent {
  public desbloqueo = new DesbloqueoIvr();
  environment = environment;

  public DesbloqueoIvr = DesbloqueoIvr;

  constructor(private ivrService: IvrService) {
    super();

    // SE USAN PARA 'TRADUCIR' los parametros a legible por humanos
    this.IDENTIFIER_VALUES_TEXT[DesbloqueoIvr.INE_FRONT] = 'Frente INE';
    this.IDENTIFIER_VALUES_TEXT[DesbloqueoIvr.INE_FRONT_REFERENCE] = 'La referencia del frente del INE';
    this.IDENTIFIER_VALUES_TEXT[DesbloqueoIvr.INE_FRONT_EXTENSION] = 'La extension del frente del INE';
    this.IDENTIFIER_VALUES_TEXT[DesbloqueoIvr.INE_BACK] = 'Reverso INE';
    this.IDENTIFIER_VALUES_TEXT[DesbloqueoIvr.INE_BACK_REFERENCE] = 'La referencia del reverso del INE';
    this.IDENTIFIER_VALUES_TEXT[DesbloqueoIvr.INE_BACK_EXTENSION] = 'La extension del reverso del INE';
    this.IDENTIFIER_VALUES_TEXT[DesbloqueoIvr.SELFIE] = 'Selfie';
    this.IDENTIFIER_VALUES_TEXT[DesbloqueoIvr.SELFIE_REFERENCE] = 'La referencia de la selfie';
    this.IDENTIFIER_VALUES_TEXT[DesbloqueoIvr.SELFIE_EXTENSION] = 'La extension de la selfie';
    this.IDENTIFIER_VALUES_TEXT[DesbloqueoIvr.PROOF_OF_RESIDENCY] = 'Comprobante de domicilio';
    this.IDENTIFIER_VALUES_TEXT[DesbloqueoIvr.PROOF_OF_RESIDENCY_REFERENCE] = 'La referencia del comprobante de domicilio';
    this.IDENTIFIER_VALUES_TEXT[DesbloqueoIvr.PROOF_OF_RESIDENCY_EXTENSION] = 'La extensión del comprobante de domicilio';

    // PLANTILLAS PARA PRESENTAR MESNAJES
    this.MESSAGES['success'] = 'Se ha enviado la solicitud de reporte con éxito';
    this.MESSAGES['error'] = 'Error al intentar enviar reporte desbloqueo';
  }


  public submitForm(event) {
    if (this.busy) {
      return;
    }
    this.busy = true;

    this.desbloqueo.accountNumber = '';
    this.desbloqueo.phoneNumber = '';
    this.desbloqueo.card = '';

    switch (this.identifier) {
      case DesbloqueoIvr.CARD:
        // this.desbloqueo.card = this.card;
        break;
      case DesbloqueoIvr.ACCOUNT_NUMBER:
        // this.desbloqueo.accountNumber = this.accountNumber;
        break;
      case DesbloqueoIvr.PHONE_NUMBER:
        // this.desbloqueo.phoneNumber = this.phoneNumber;
        break;
      default:
        break;
    }

    this.sendIneFront();
  }

  public sendIneFront() {
    if (!this.desbloqueo.ineFront.reference && this.desbloqueo.ineFront.payload) {
      this.ivrService.sendImagen(this.desbloqueo.ineFront).subscribe(
        next => {
          if (!next.data || !next.data.reference) {
            this.busy = false;
            window.alert('Error al intentar enviar Ine Frente');
            return;
          }
          this.desbloqueo.ineFront.reference = next.data.reference;
          this.sendIneBack();
        },
        error => {
          this.busy = false;
        },
      );
      return;
    }

    this.sendIneBack();
  }

  public sendIneBack() {
    if (!this.desbloqueo.ineBack.reference && this.desbloqueo.ineBack.payload) {
      this.ivrService.sendImagen(this.desbloqueo.ineBack).subscribe(
        next => {
          if (!next.data || !next.data.reference) {
            this.busy = false;
            window.alert('Error al intentar enviar Ine Reverso');
            return;
          }
          this.desbloqueo.ineBack.reference = next.data.reference;
          this.sendSelfie();
        },
        error => {
          this.busy = false;
        },
      );
      return;
    }

    this.sendSelfie();
  }

  public sendSelfie() {
    if (!this.desbloqueo.selfie.reference && this.desbloqueo.selfie.payload) {
      this.ivrService.sendImagen(this.desbloqueo.selfie).subscribe(
        next => {
          if (!next.data || !next.data.reference) {
            this.busy = false;
            window.alert('Error al intentar enviar selfie');
            return;
          }
          this.desbloqueo.selfie.reference = next.data.reference;
          this.sendProofOfResidency();
        },
        error => {
          this.busy = false;
        },
      );
      return;
    }

    this.sendProofOfResidency();
  }

  public sendProofOfResidency() {
    if (!this.desbloqueo.proofOfResidency.reference && this.desbloqueo.proofOfResidency.payload) {
      this.ivrService.sendImagen(this.desbloqueo.proofOfResidency).subscribe(
        next => {
          if (!next.data || !next.data.reference) {
            this.busy = false;
            return;
          }
          this.desbloqueo.proofOfResidency.reference = next.data.reference;
          this.sendDesbloqueo();
        },
        error => {
          window.alert('Error al intentar enviar el comprobante de domicilio');
          this.busy = false;
        },
      );
      return;
    }

    this.sendDesbloqueo();
  }

  public sendDesbloqueo() {
    this.ivrService.sendDesbloqueo(this.desbloqueo).subscribe(
      next => {
        this.clear();
        this.busy = false;
        window.alert(this.getMessage('success', {}));
      },
      error => {
        window.alert(this.getMessage('error', {}));
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

  public fileChanged(image: ImagenIvr, type: string) {
    switch (type) {
      case DesbloqueoIvr.INE_FRONT:
        this.desbloqueo.ineFront = image;
        break;
      case DesbloqueoIvr.INE_BACK:
        this.desbloqueo.ineBack = image;
        break;
      case DesbloqueoIvr.SELFIE:
        this.desbloqueo.selfie = image;
        break;
      case DesbloqueoIvr.PROOF_OF_RESIDENCY:
        this.desbloqueo.proofOfResidency = image;
        break;
      default:
        break;
    }
  }

  public fileChangeError(error: string, type: string, file: File) {
    switch (error) {
      case IvrBaseComponent.FILE_CHANGE_ERROR_INVALID_MIMETYPE:
      default:
        window.alert(this.getErrorMessageFromError({
          type: IvrBaseComponent.FILE_CHANGE_ERROR_INVALID_MIMETYPE,
          values: ['png', 'jpg'],
        }, type, IvrBaseComponent.FILE_CHANGE_ERROR_INVALID_MIMETYPE)['message']);
        break;

    }
  }

  public clear() {
    super.clear();
    this.desbloqueo.clear();
  }

}
