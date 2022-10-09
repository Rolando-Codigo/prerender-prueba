import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AsesoriaIvr } from '../asesoria-ivr';
import { DesbloqueoIvr } from '../desbloqueo-ivr';
import { FallaIvr } from '../falla-ivr';
import { ImagenIvr } from '../imagen-ivr';
import { ImagenResponseIvr } from '../imagen-response-ivr';
import { SugerenciaIvr } from '../sugerencia-ivr';
// import {AclaracionIvr} from './aclaracion-ivr';
// import {RastreoIvr} from './rastreo-ivr';
// import {RfcCurpIvr} from './rfc-curp-ivr';
// import {CambioCorreoIvr} from './cambio-correo-ivr';
// import {CambioTelefonoIvr} from './cambio-telefono-ivr';
// import {CambioDireccionIvr} from './cambio-direccion-ivr';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class IvrService {
  public static ERROR_TYPE_REQUIRED = 'REQUIRED';
  public static ERROR_TYPE_REQUIRED_WITH = 'REQUIRED_WITH';
  public static ERROR_TYPE_REQUIRED_WITHOUT = 'REQUIRED_WITHOUT';
  public static ERROR_TYPE_REQUIRED_WITH_ALL = 'REQUIRED_WITH_ALL';
  public static ERROR_TYPE_REQUIRED_WITHOUT_ALL = 'REQUIRED_WITHOUT_ALL';
  public static ERROR_TYPE_LENGTH = 'LENGTH';
  public static ERROR_TYPE_NUMERIC = 'NUMERIC';
  public static ERROR_TYPE_AMOUNT_CURRENCY = 'AMOUNT_CURRENCY';
  public static ERROR_TYPE_DATE_TIME = 'DATE_TIME';
  public static ERROR_TYPE_ONE_OF = 'ONE_OF';
  public static ERROR_TYPE_BASE64 = 'BASE64';
  private host;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) public platformId: Object
    ) {
    
      if(isPlatformBrowser(this.platformId)) {
        const host: string = window.location.hostname;
        if (host.search('heybanco') !== -1) {
          this.host = 'heybanco.com';
        } else {
          this.host = 'banco.hey.inc';
      }
    }
  }

  // TODO: CAMBIAR A PRODUCTIVA CUANDO SEA EL MOMENTO
  // private _URL = '/us-central-ivr';
  private _URL = 'https://us-central1-cac-brprod.cloudfunctions.net/PortalHeyIVRFormFunctions';
  // private _URL = 'https://us-central1-cac-brprod.cloudfunctions.net/PortalHeyIVRFormFunctions';
  // private _URL_ACLARACION = `${this._URL}?type=aclaracion`;
  private _URL_FALLA = `${this._URL}?type=falla`;
  private _URL_DESBLOQUEO = `${this._URL}?type=desbloqueo`;
  // private _URL_RASTREO = `${this._URL}?type=rastreo`;
  // private _URL_RFC_CURP = `${this._URL}?type=cambio-rfc-curp`;
  // private _URL_EMAIL = `${this._URL}?type=cambio-email`;
  // private _URL_PHONE_NUMBER = `${this._URL}?type=cambio-telefono`;
  // private _URL_ADDRESS = `${this._URL}?type=cambio-direccion`;
  private _URL_ASESORIA = `${this._URL}?type=asesoria`;
  private _URL_SUGERENCIA = `${this._URL}?type=sugerencias`;
  private _URL_IMAGEN = `${this._URL}?type=imagen`;

  private static notNullOrDefault(value: any, fallback: any = '') {
    return value ? value : fallback;
  }

  private sendMultipartFormData(url: string, formData: FormData) {
    const headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data'
    });
    const options = {
      headers: headers,
    };

    return this.http.post(url, formData, options)
      .pipe(catchError(this.handleError));
  }

  private sendFormUrlencoded(url: string, formData: HttpParams) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const options = {
      headers: headers,
    };

    return this.http.post(url, formData, options)
      .pipe(catchError(this.handleError));
  }

  /**
   * @param desbloqueoIvr DesbloqueoIvr
   * @param type string
   * @deprecated
   */
  public sendDesbloqueo = (desbloqueoIvr: DesbloqueoIvr, type: string = 'application/x-www-form-urlencoded') => {
    switch (type) {
      case 'multipart/form-data':
        return this.sendDesbloqueoMultipartFormdata(desbloqueoIvr);
      default:
        return this.sendDesbloqueoFormUrlencoded(desbloqueoIvr);
    }
  }

  /**
   * @param desbloqueoIvr DesbloqueoIvr
   */
  public sendDesbloqueoFormUrlencoded = (desbloqueoIvr: DesbloqueoIvr) => {



    const formData: HttpParams = new HttpParams()
      .set(DesbloqueoIvr.CARD, IvrService.notNullOrDefault(desbloqueoIvr.card))
      .set(DesbloqueoIvr.ACCOUNT_NUMBER, IvrService.notNullOrDefault(desbloqueoIvr.accountNumber))
      .set(DesbloqueoIvr.PHONE_NUMBER, IvrService.notNullOrDefault(desbloqueoIvr.phoneNumber))
      .set(DesbloqueoIvr.EMAIL, IvrService.notNullOrDefault(desbloqueoIvr.email))
      .set(DesbloqueoIvr.COMMENTS, IvrService.notNullOrDefault(desbloqueoIvr.comments))
      .set(DesbloqueoIvr.INE_FRONT_EXTENSION, IvrService.notNullOrDefault(desbloqueoIvr.ineFront.extension))
      .set(DesbloqueoIvr.INE_FRONT_REFERENCE, IvrService.notNullOrDefault(desbloqueoIvr.ineFront.reference))
      .set(DesbloqueoIvr.INE_FRONT, !desbloqueoIvr.ineFront.reference && desbloqueoIvr.ineFront.payload ?
        desbloqueoIvr.ineFront.payload
          .replace(/\+/g, '-')
          .replace(/\//g, '_')
          .replace(/=/g, '.')
        : '')
      .set(DesbloqueoIvr.INE_BACK_EXTENSION, IvrService.notNullOrDefault(desbloqueoIvr.ineBack.extension))
      .set(DesbloqueoIvr.INE_BACK_REFERENCE, IvrService.notNullOrDefault(desbloqueoIvr.ineBack.reference))
      .set(DesbloqueoIvr.INE_BACK, !desbloqueoIvr.ineBack.reference && desbloqueoIvr.ineBack.payload ?
        desbloqueoIvr.ineBack.payload
          .replace(/\+/g, '-')
          .replace(/\//g, '_')
          .replace(/=/g, '.')
        : '')
      .set(DesbloqueoIvr.SELFIE_EXTENSION, IvrService.notNullOrDefault(desbloqueoIvr.selfie.extension))
      .set(DesbloqueoIvr.SELFIE_REFERENCE, IvrService.notNullOrDefault(desbloqueoIvr.selfie.reference))
      .set(DesbloqueoIvr.SELFIE, !desbloqueoIvr.selfie.reference && desbloqueoIvr.selfie.payload ?
        desbloqueoIvr.selfie.payload
          .replace(/\+/g, '-')
          .replace(/\//g, '_')
          .replace(/=/g, '.')
        : '')
      .set(DesbloqueoIvr.PROOF_OF_RESIDENCY_EXTENSION,
        IvrService.notNullOrDefault(desbloqueoIvr.proofOfResidency.extension))
      .set(DesbloqueoIvr.PROOF_OF_RESIDENCY_REFERENCE,
        IvrService.notNullOrDefault(desbloqueoIvr.proofOfResidency.reference))
      .set(DesbloqueoIvr.PROOF_OF_RESIDENCY, !desbloqueoIvr.proofOfResidency.reference && desbloqueoIvr.proofOfResidency.payload ?
        desbloqueoIvr.proofOfResidency.payload
          .replace(/\+/g, '-')
          .replace(/\//g, '_')
          .replace(/=/g, '.')
        : '')
      .set(DesbloqueoIvr.RECAPTCHA_TOKEN, IvrService.notNullOrDefault(desbloqueoIvr.recaptcha_token))
      .set(DesbloqueoIvr.HOST, IvrService.notNullOrDefault(this.host));
    return this.sendFormUrlencoded(this._URL_DESBLOQUEO, formData);
  }

  /**
   * [TODO: El servicio aun no esta listo para recibir de esta forma] Se envia la forma como datos multipart
   * @param desbloqueoIvr DesbloqueoIvr
   */
  public sendDesbloqueoMultipartFormdata = (desbloqueoIvr: DesbloqueoIvr) => {
    const formData: FormData = new FormData();
    formData.append(DesbloqueoIvr.CARD, IvrService.notNullOrDefault(desbloqueoIvr.card));
    formData.append(DesbloqueoIvr.ACCOUNT_NUMBER, IvrService.notNullOrDefault(desbloqueoIvr.accountNumber));
    formData.append(DesbloqueoIvr.PHONE_NUMBER, IvrService.notNullOrDefault(desbloqueoIvr.phoneNumber));
    formData.append(DesbloqueoIvr.EMAIL, IvrService.notNullOrDefault(desbloqueoIvr.email));
    formData.append(DesbloqueoIvr.COMMENTS, IvrService.notNullOrDefault(desbloqueoIvr.comments));
    formData.append(DesbloqueoIvr.INE_FRONT_EXTENSION, IvrService.notNullOrDefault(desbloqueoIvr.ineFront.extension));
    formData.append(DesbloqueoIvr.INE_FRONT_REFERENCE, IvrService.notNullOrDefault(desbloqueoIvr.ineFront.reference));
    formData.append(DesbloqueoIvr.INE_FRONT, IvrService.notNullOrDefault(desbloqueoIvr.ineFront.payload));
    formData.append(DesbloqueoIvr.INE_BACK_EXTENSION, IvrService.notNullOrDefault(desbloqueoIvr.ineBack.extension));
    formData.append(DesbloqueoIvr.INE_BACK_REFERENCE, IvrService.notNullOrDefault(desbloqueoIvr.ineBack.reference));
    formData.append(DesbloqueoIvr.INE_BACK, IvrService.notNullOrDefault(desbloqueoIvr.ineBack.payload));
    formData.append(DesbloqueoIvr.SELFIE_EXTENSION, IvrService.notNullOrDefault(desbloqueoIvr.selfie.extension));
    formData.append(DesbloqueoIvr.SELFIE_REFERENCE, IvrService.notNullOrDefault(desbloqueoIvr.selfie.reference));
    formData.append(DesbloqueoIvr.SELFIE, IvrService.notNullOrDefault(desbloqueoIvr.selfie.payload));
    formData.append(DesbloqueoIvr.PROOF_OF_RESIDENCY_EXTENSION,
      IvrService.notNullOrDefault(desbloqueoIvr.proofOfResidency.extension));
    formData.append(DesbloqueoIvr.PROOF_OF_RESIDENCY_REFERENCE,
      IvrService.notNullOrDefault(desbloqueoIvr.proofOfResidency.reference));
    formData.append(DesbloqueoIvr.PROOF_OF_RESIDENCY,
      IvrService.notNullOrDefault(desbloqueoIvr.proofOfResidency.payload));
    formData.append(DesbloqueoIvr.RECAPTCHA_TOKEN,
      IvrService.notNullOrDefault(desbloqueoIvr.recaptcha_token));
    formData.append(DesbloqueoIvr.HOST, IvrService.notNullOrDefault(this.host));

    return this.sendMultipartFormData(this._URL_DESBLOQUEO, formData);
  }

  /**
   * @param fallaIvr FallaIvr
   * @param type string
   */
  public sendFalla = (fallaIvr: FallaIvr, type: string = 'application/x-www-form-urlencoded') => {
    switch (type) {
      case 'multipart/form-data':
        return this.sendFallaMultipartFormdata(fallaIvr);
      default:
        return this.sendFallaFormUrlencoded(fallaIvr);
    }
  }

  /**
   * Se envia la forma como datos url-encoded
   * @param fallaIvr FallaIvr
   */
  public sendFallaFormUrlencoded = (fallaIvr: FallaIvr) => {
    const formData: HttpParams = new HttpParams()
      .set(FallaIvr.CARD, IvrService.notNullOrDefault(fallaIvr.card))
      .set(FallaIvr.ACCOUNT_NUMBER, IvrService.notNullOrDefault(fallaIvr.accountNumber))
      .set(FallaIvr.PHONE_NUMBER, IvrService.notNullOrDefault(fallaIvr.phoneNumber))
      .set(FallaIvr.EMAIL, IvrService.notNullOrDefault(fallaIvr.email))
      .set(FallaIvr.NAME, IvrService.notNullOrDefault(fallaIvr.name))
      .set(FallaIvr.DESCRIPTION, IvrService.notNullOrDefault(fallaIvr.description))
      .set(FallaIvr.DEVICE, IvrService.notNullOrDefault(fallaIvr.device))
      .set(FallaIvr.APP_VERSION, IvrService.notNullOrDefault(fallaIvr.appVersion))
      .set(FallaIvr.OS, IvrService.notNullOrDefault(fallaIvr.os))
      .set(FallaIvr.COMMENTS, IvrService.notNullOrDefault(fallaIvr.comments))
      .set(FallaIvr.EVIDENCE_EXTENSION, IvrService.notNullOrDefault(fallaIvr.evidence.extension))
      .set(FallaIvr.EVIDENCE_REFERENCE, IvrService.notNullOrDefault(fallaIvr.evidence.reference))
      .set(FallaIvr.EVIDENCE, !fallaIvr.evidence.reference && fallaIvr.evidence.payload ?
        fallaIvr.evidence.payload
          .replace(/\+/g, '-')
          .replace(/\//g, '_')
          .replace(/=/g, '.')
        : '')
      .set(FallaIvr.EVIDENCE_2_EXTENSION, IvrService.notNullOrDefault(fallaIvr.evidence2.extension))
      .set(FallaIvr.EVIDENCE_2_REFERENCE, IvrService.notNullOrDefault(fallaIvr.evidence2.reference))
      .set(FallaIvr.EVIDENCE_2, !fallaIvr.evidence2.reference && fallaIvr.evidence2.payload ?
        fallaIvr.evidence2.payload
          .replace(/\+/g, '-')
          .replace(/\//g, '_')
          .replace(/=/g, '.')
        : '')
      .set(FallaIvr.EVIDENCE_3_EXTENSION, IvrService.notNullOrDefault(fallaIvr.evidence3.extension))
      .set(FallaIvr.EVIDENCE_3_REFERENCE, IvrService.notNullOrDefault(fallaIvr.evidence3.reference))
      .set(FallaIvr.EVIDENCE_3, !fallaIvr.evidence3.reference && fallaIvr.evidence3.payload ?
        fallaIvr.evidence3.payload
          .replace(/\+/g, '-')
          .replace(/\//g, '_')
          .replace(/=/g, '.')
        : '')
      .set(FallaIvr.EVIDENCE_4_EXTENSION, IvrService.notNullOrDefault(fallaIvr.evidence4.extension))
      .set(FallaIvr.EVIDENCE_4_REFERENCE, IvrService.notNullOrDefault(fallaIvr.evidence4.reference))
      .set(FallaIvr.EVIDENCE_4, !fallaIvr.evidence4.reference && fallaIvr.evidence4.payload ?
        fallaIvr.evidence4.payload
          .replace(/\+/g, '-')
          .replace(/\//g, '_')
          .replace(/=/g, '.')
        : '')
      .set(FallaIvr.RECAPTCHA_TOKEN, IvrService.notNullOrDefault(fallaIvr.recaptcha_token))
      .set(FallaIvr.HOST, IvrService.notNullOrDefault(this.host));
    return this.sendFormUrlencoded(this._URL_FALLA, formData);
  }

  /**
   * [TODO: El servicio aun no esta listo para recibir de esta forma] Se envia la forma como datos multipart
   * @param fallaIvr FallaIvr
   */
  public sendFallaMultipartFormdata = (fallaIvr: FallaIvr) => {
    const formData: FormData = new FormData();
    formData.append(FallaIvr.CARD, IvrService.notNullOrDefault(fallaIvr.card));
    formData.append(FallaIvr.ACCOUNT_NUMBER, IvrService.notNullOrDefault(fallaIvr.accountNumber));
    formData.append(FallaIvr.PHONE_NUMBER, IvrService.notNullOrDefault(fallaIvr.phoneNumber));
    formData.append(FallaIvr.EMAIL, IvrService.notNullOrDefault(fallaIvr.email));
    formData.append(FallaIvr.NAME, IvrService.notNullOrDefault(fallaIvr.name));
    formData.append(FallaIvr.DESCRIPTION, IvrService.notNullOrDefault(fallaIvr.description));
    formData.append(FallaIvr.DEVICE, IvrService.notNullOrDefault(fallaIvr.device));
    formData.append(FallaIvr.APP_VERSION, IvrService.notNullOrDefault(fallaIvr.appVersion));
    formData.append(FallaIvr.OS, IvrService.notNullOrDefault(fallaIvr.os));
    formData.append(FallaIvr.COMMENTS, IvrService.notNullOrDefault(fallaIvr.comments));
    formData.append(FallaIvr.EVIDENCE_EXTENSION, IvrService.notNullOrDefault(fallaIvr.evidence.extension));
    formData.append(FallaIvr.EVIDENCE_REFERENCE, IvrService.notNullOrDefault(fallaIvr.evidence.reference));
    formData.append(FallaIvr.EVIDENCE, IvrService.notNullOrDefault(fallaIvr.evidence.payload));
    formData.append(FallaIvr.EVIDENCE_2_EXTENSION, IvrService.notNullOrDefault(fallaIvr.evidence2.extension));
    formData.append(FallaIvr.EVIDENCE_2_REFERENCE, IvrService.notNullOrDefault(fallaIvr.evidence2.reference));
    formData.append(FallaIvr.EVIDENCE_2, IvrService.notNullOrDefault(fallaIvr.evidence2.payload));
    formData.append(FallaIvr.EVIDENCE_3_EXTENSION, IvrService.notNullOrDefault(fallaIvr.evidence3.extension));
    formData.append(FallaIvr.EVIDENCE_3_REFERENCE, IvrService.notNullOrDefault(fallaIvr.evidence3.reference));
    formData.append(FallaIvr.EVIDENCE_3, IvrService.notNullOrDefault(fallaIvr.evidence3.payload));
    formData.append(FallaIvr.EVIDENCE_4_EXTENSION, IvrService.notNullOrDefault(fallaIvr.evidence4.extension));
    formData.append(FallaIvr.EVIDENCE_4_REFERENCE, IvrService.notNullOrDefault(fallaIvr.evidence4.reference));
    formData.append(FallaIvr.EVIDENCE_4, IvrService.notNullOrDefault(fallaIvr.evidence4.payload));
    formData.append(FallaIvr.RECAPTCHA_TOKEN, IvrService.notNullOrDefault(fallaIvr.recaptcha_token));
    formData.append(FallaIvr.HOST, IvrService.notNullOrDefault(this.host));

    return this.sendMultipartFormData(this._URL_FALLA, formData);
  }

  /**
   * @param asesoriaIvr AsesoriaIvr
   * @param type string
   */
  public sendAsesoria = (asesoriaIvr: AsesoriaIvr, type: string = 'application/x-www-form-urlencoded') => {
    switch (type) {
      case 'multipart/form-data':
        return this.sendAsesoriaMultipartFormdata(asesoriaIvr);
      default:
        return this.sendAsesoriaFormUrlencoded(asesoriaIvr);
    }
  }

  /**
   * Se envia la forma como datos url-encoded
   * @param asesoriaIvr AsesoriaIvr
   */
  public sendAsesoriaFormUrlencoded = (asesoriaIvr: AsesoriaIvr) => {
    const formData: HttpParams = new HttpParams()
      .set(AsesoriaIvr.CARD, IvrService.notNullOrDefault(asesoriaIvr.card))
      .set(AsesoriaIvr.ACCOUNT_NUMBER, IvrService.notNullOrDefault(asesoriaIvr.accountNumber))
      .set(AsesoriaIvr.PHONE_NUMBER, IvrService.notNullOrDefault(asesoriaIvr.phoneNumber))
      .set(AsesoriaIvr.EMAIL, IvrService.notNullOrDefault(asesoriaIvr.email))
      .set(AsesoriaIvr.NAME, IvrService.notNullOrDefault(asesoriaIvr.name))
      .set(AsesoriaIvr.PRODUCT, IvrService.notNullOrDefault(asesoriaIvr.product))
      .set(AsesoriaIvr.COMMENTS, IvrService.notNullOrDefault(asesoriaIvr.comments))
      .set(AsesoriaIvr.RECAPTCHA_TOKEN, IvrService.notNullOrDefault(asesoriaIvr.recaptcha_token))
      .set(AsesoriaIvr.HOST, IvrService.notNullOrDefault(this.host));
    return this.sendFormUrlencoded(this._URL_ASESORIA, formData);
  }

  /**
   * [TODO: El servicio aun no esta listo para recibir de esta forma] Se envia la forma como datos multipart
   * @param asesoriaIvr AsesoriaIvr
   */
  public sendAsesoriaMultipartFormdata = (asesoriaIvr: AsesoriaIvr) => {

    const formData: FormData = new FormData();
    formData.append(AsesoriaIvr.CARD, IvrService.notNullOrDefault(asesoriaIvr.card));
    formData.append(AsesoriaIvr.ACCOUNT_NUMBER, IvrService.notNullOrDefault(asesoriaIvr.accountNumber));
    formData.append(AsesoriaIvr.PHONE_NUMBER, IvrService.notNullOrDefault(asesoriaIvr.accountNumber));
    formData.append(AsesoriaIvr.EMAIL, IvrService.notNullOrDefault(asesoriaIvr.email));
    formData.append(AsesoriaIvr.NAME, IvrService.notNullOrDefault(asesoriaIvr.name));
    formData.append(AsesoriaIvr.PRODUCT, IvrService.notNullOrDefault(asesoriaIvr.product));
    formData.append(AsesoriaIvr.COMMENTS, IvrService.notNullOrDefault(asesoriaIvr.comments));
    formData.append(AsesoriaIvr.RECAPTCHA_TOKEN, IvrService.notNullOrDefault(asesoriaIvr.recaptcha_token));
    formData.append(AsesoriaIvr.HOST, IvrService.notNullOrDefault(this.host));

    return this.sendMultipartFormData(this._URL_ASESORIA, formData);
  }

  /**
   * @param sugerenciaIvr SugerenciaIvr
   * @param type string
   */
  public sendSugerencia = (sugerenciaIvr: SugerenciaIvr, type: string = 'application/x-www-form-urlencoded') => {
    switch (type) {
      case 'multipart/form-data':
        return this.sendSugerenciaMultipartFormdata(sugerenciaIvr);
      default:
        return this.sendSugerenciaFormUrlencoded(sugerenciaIvr);
    }
  }

  /**
   * Se envia la forma como datos url-encoded
   * @param sugerenciaIvr SugerenciaIvr
   */
  public sendSugerenciaFormUrlencoded = (sugerenciaIvr: SugerenciaIvr) => {
    const formData: HttpParams = new HttpParams()
      .set(SugerenciaIvr.CARD, IvrService.notNullOrDefault(sugerenciaIvr.card))
      .set(SugerenciaIvr.ACCOUNT_NUMBER, IvrService.notNullOrDefault(sugerenciaIvr.accountNumber))
      .set(SugerenciaIvr.PHONE_NUMBER, IvrService.notNullOrDefault(sugerenciaIvr.phoneNumber))
      .set(SugerenciaIvr.EMAIL, IvrService.notNullOrDefault(sugerenciaIvr.email))
      .set(SugerenciaIvr.NAME, IvrService.notNullOrDefault(sugerenciaIvr.name))
      .set(SugerenciaIvr.PRODUCT, IvrService.notNullOrDefault(sugerenciaIvr.product))
      .set(SugerenciaIvr.COMMENTS, IvrService.notNullOrDefault(sugerenciaIvr.comments))
      .set(SugerenciaIvr.RECAPTCHA_TOKEN, IvrService.notNullOrDefault(sugerenciaIvr.recaptcha_token))
      .set(SugerenciaIvr.HOST, IvrService.notNullOrDefault(this.host));

    return this.sendFormUrlencoded(this._URL_SUGERENCIA, formData);
  }

  /**
   * [TODO: El servicio aun no esta listo para recibir de esta forma] Se envia la forma como datos multipart
   * @param sugerenciaIvr SugerenciaIvr
   */
  public sendSugerenciaMultipartFormdata = (sugerenciaIvr: SugerenciaIvr) => {
    const formData: FormData = new FormData();
    formData.append(SugerenciaIvr.CARD, IvrService.notNullOrDefault(sugerenciaIvr.card));
    formData.append(SugerenciaIvr.ACCOUNT_NUMBER, IvrService.notNullOrDefault(sugerenciaIvr.accountNumber));
    formData.append(SugerenciaIvr.PHONE_NUMBER, IvrService.notNullOrDefault(sugerenciaIvr.accountNumber));
    formData.append(SugerenciaIvr.EMAIL, IvrService.notNullOrDefault(sugerenciaIvr.email));
    formData.append(SugerenciaIvr.NAME, IvrService.notNullOrDefault(sugerenciaIvr.name));
    formData.append(SugerenciaIvr.PRODUCT, IvrService.notNullOrDefault(sugerenciaIvr.product));
    formData.append(SugerenciaIvr.COMMENTS, IvrService.notNullOrDefault(sugerenciaIvr.comments));
    formData.append(SugerenciaIvr.RECAPTCHA_TOKEN, IvrService.notNullOrDefault(sugerenciaIvr.recaptcha_token));
    formData.append(SugerenciaIvr.HOST, IvrService.notNullOrDefault(this.host));

    return this.sendMultipartFormData(this._URL_SUGERENCIA, formData);
  }

  /**
   * @param imagenIvr ImagenIvr
   * @param type string
   */
  public sendImagen = (imagenIvr: ImagenIvr, type: string = 'application/x-www-form-urlencoded') => {
    switch (type) {
      case 'multipart/form-data':
        return this.sendImagenMultipartFormdata(imagenIvr);
      default:
        return this.sendImagenFormUrlencoded(imagenIvr);
    }
  }

  /**
   * @param imagenIvr ImagenIvr
   */
  public sendImagenFormUrlencoded = (imagenIvr: ImagenIvr) => {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const options = {
      headers: headers,
    };
    const formData: HttpParams = new HttpParams()
      .set(imagenIvr.IMAGE_PAYLOAD, imagenIvr.payload ? imagenIvr.payload
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '.') : '');
    return this.http.post<ImagenResponseIvr>(this._URL_IMAGEN, formData, options)
      .pipe(catchError(this.handleError));
  }

  /**
   * [TODO: El servicio aun no esta listo para recibir de esta forma] Se envia la forma como datos multipart
   * @param imagenIvr ImagenIvr
   */
  public sendImagenMultipartFormdata = (imagenIvr: ImagenIvr) => {
    const headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data'
    });
    const options = {
      headers: headers,
    };
    const formData: FormData = new FormData();
    formData.append(imagenIvr.IMAGE_PAYLOAD, imagenIvr.payload);
    return this.http.post<ImagenResponseIvr>(this._URL_IMAGEN, formData, options)
      .pipe(catchError(this.handleError));
  }

  /**
   * @deprecated
   */
  // public sendAclaracion = (aclaracionIvr: AclaracionIvr,
  //     type: string = 'application/x-www-form-urlencoded') => {
  //   switch (type) {
  //     case 'multipart/form-data':
  //       return this.sendAclaracionMultipartFormdata(aclaracionIvr);
  //     default:
  //       return this.sendAclaracionFormUrlencoded(aclaracionIvr);
  //   }
  // }

  /**
   * Se envia la forma como datos url-encoded
   * @param aclaracionIvr AclaracionIvr
   * @deprecated
   */
  // public sendAclaracionFormUrlencoded = (aclaracionIvr: AclaracionIvr) => {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //   });
  //   const options = {
  //     headers: headers,
  //   };
  //
  //   const formData: HttpParams = new HttpParams()
  //     .set(aclaracionIvr.CARD, IvrService.notNullOrDefault(aclaracionIvr.card))
  //     .set(aclaracionIvr.ACCOUNT_NUMBER, IvrService.notNullOrDefault(aclaracionIvr.accountNumber))
  //     .set(aclaracionIvr.TRANSACTION_AMOUNT, IvrService.notNullOrDefault(aclaracionIvr.transactionAmount))
  //     .set(aclaracionIvr.TRANSACTION_DATE, IvrService.notNullOrDefault(aclaracionIvr.transactionDate))
  //     .set(aclaracionIvr.BUSINESS_NAME, IvrService.notNullOrDefault(aclaracionIvr.businessName))
  //     .set(aclaracionIvr.BALANCE_LOCKED_OR_PENDING, aclaracionIvr.balanceLockedOrPending ? 'true' : 'false')
  //     .set(aclaracionIvr.REASON, IvrService.notNullOrDefault(aclaracionIvr.reason))
  //     .set(aclaracionIvr.AGREEMENT, aclaracionIvr.agreement ? 'true' : 'false')
  //     .set(aclaracionIvr.COMMENTS, IvrService.notNullOrDefault(aclaracionIvr.comments))
  //     .set(aclaracionIvr.INE_FRONT_EXTENSION, IvrService.notNullOrDefault(aclaracionIvr.ineFront.extension))
  //     .set(aclaracionIvr.INE_FRONT_REFERENCE, IvrService.notNullOrDefault(aclaracionIvr.ineFront.reference))
  //     .set(aclaracionIvr.INE_FRONT, !aclaracionIvr.ineFront.reference
  //     && aclaracionIvr.ineFront.payload ?
  //       aclaracionIvr.ineFront.payload
  //         .replace(/\+/g, '-')
  //         .replace(/\//g, '_')
  //         .replace(/=/g, '.')
  //       : '')
  //     .set(aclaracionIvr.INE_BACK_EXTENSION, IvrService.notNullOrDefault(aclaracionIvr.ineBack.extension))
  //     .set(aclaracionIvr.INE_BACK_REFERENCE, IvrService.notNullOrDefault(aclaracionIvr.ineBack.reference))
  //     .set(aclaracionIvr.INE_BACK, !aclaracionIvr.ineBack.reference
  //     && aclaracionIvr.ineBack.payload ?
  //       aclaracionIvr.ineBack.payload
  //         .replace(/\+/g, '-')
  //         .replace(/\//g, '_')
  //         .replace(/=/g, '.')
  //       : '')
  //     .set(aclaracionIvr.CARD_FRONT_EXTENSION, IvrService.notNullOrDefault(aclaracionIvr.cardFront.extension))
  //     .set(aclaracionIvr.CARD_FRONT_REFERENCE, IvrService.notNullOrDefault(aclaracionIvr.cardFront.reference))
  //     .set(aclaracionIvr.CARD_FRONT, !aclaracionIvr.cardFront.reference
  //     && aclaracionIvr.cardFront.payload ?
  //       aclaracionIvr.cardFront.payload
  //         .replace(/\+/g, '-')
  //         .replace(/\//g, '_')
  //         .replace(/=/g, '.')
  //       : '')
  //     .set(aclaracionIvr.CARD_BACK_EXTENSION, IvrService.notNullOrDefault(aclaracionIvr.cardBack.extension))
  //     .set(aclaracionIvr.CARD_BACK_REFERENCE, IvrService.notNullOrDefault(aclaracionIvr.cardBack.reference))
  //     .set(aclaracionIvr.CARD_BACK, !aclaracionIvr.cardBack.reference
  //     && aclaracionIvr.cardBack.payload ?
  //       aclaracionIvr.cardBack.payload
  //         .replace(/\+/g, '-')
  //         .replace(/\//g, '_')
  //         .replace(/=/g, '.')
  //       : '')
  //     .set(aclaracionIvr.VOUCHER_EXTENSION, IvrService.notNullOrDefault(aclaracionIvr.voucher.extension))
  //     .set(aclaracionIvr.VOUCHER_REFERENCE, IvrService.notNullOrDefault(aclaracionIvr.voucher.reference))
  //     .set(aclaracionIvr.VOUCHER, !aclaracionIvr.voucher.reference
  //     && aclaracionIvr.voucher.payload ?
  //       aclaracionIvr.voucher.payload
  //         .replace(/\+/g, '-')
  //         .replace(/\//g, '_')
  //         .replace(/=/g, '.')
  //       : '');
  //   return this.http.post(this._URL_ACLARACION, formData, options)
  //     .pipe(retry(2), catchError(this.handleError));
  // }

  /**
   * [TODO: El servicio aun no esta listo para recibir de esta forma] Se envia la forma como datos multipart
   * @param aclaracionIvr AclaracionIvr
   * @deprecated
   */
  // public sendAclaracionMultipartFormdata = (aclaracionIvr: AclaracionIvr) => {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'multipart/form-data',
  //   });
  //   const options = {
  //     headers: headers,
  //   };
  //
  //   const formData: FormData = new FormData();
  //   formData.append(aclaracionIvr.CARD, IvrService.notNullOrDefault(aclaracionIvr.card));
  //   formData.append(aclaracionIvr.ACCOUNT_NUMBER, IvrService.notNullOrDefault(aclaracionIvr.accountNumber));
  //   formData.append(aclaracionIvr.TRANSACTION_AMOUNT, IvrService.notNullOrDefault(aclaracionIvr.transactionAmount));
  //   formData.append(aclaracionIvr.TRANSACTION_DATE, IvrService.notNullOrDefault(aclaracionIvr.transactionDate));
  //   formData.append(aclaracionIvr.BUSINESS_NAME, IvrService.notNullOrDefault(aclaracionIvr.businessName));
  //   formData.append(aclaracionIvr.BALANCE_LOCKED_OR_PENDING, aclaracionIvr.balanceLockedOrPending ? 'true' : 'false');
  //   formData.append(aclaracionIvr.REASON, IvrService.notNullOrDefault(aclaracionIvr.reason));
  //   formData.append(aclaracionIvr.AGREEMENT, aclaracionIvr.agreement ? 'true' : 'false');
  //   formData.append(aclaracionIvr.COMMENTS, IvrService.notNullOrDefault(aclaracionIvr.comments));
  //   formData.append(aclaracionIvr.INE_FRONT_EXTENSION, IvrService.notNullOrDefault(aclaracionIvr.ineFront.extension));
  //   formData.append(aclaracionIvr.INE_FRONT_REFERENCE, IvrService.notNullOrDefault(aclaracionIvr.ineFront.reference));
  //   formData.append(aclaracionIvr.INE_FRONT, IvrService.notNullOrDefault(aclaracionIvr.ineFront.payload));
  //   formData.append(aclaracionIvr.INE_BACK_EXTENSION, IvrService.notNullOrDefault(aclaracionIvr.ineBack.extension));
  //   formData.append(aclaracionIvr.INE_BACK_REFERENCE, IvrService.notNullOrDefault(aclaracionIvr.ineBack.reference));
  //   formData.append(aclaracionIvr.INE_BACK, IvrService.notNullOrDefault(aclaracionIvr.ineBack.payload));
  //   formData.append(aclaracionIvr.CARD_FRONT_EXTENSION, IvrService.notNullOrDefault(aclaracionIvr.cardFront.extension));
  //   formData.append(aclaracionIvr.CARD_FRONT_REFERENCE, IvrService.notNullOrDefault(aclaracionIvr.cardFront.reference));
  //   formData.append(aclaracionIvr.CARD_FRONT, IvrService.notNullOrDefault(aclaracionIvr.cardFront.payload));
  //   formData.append(aclaracionIvr.CARD_BACK_EXTENSION, IvrService.notNullOrDefault(aclaracionIvr.cardBack.extension));
  //   formData.append(aclaracionIvr.CARD_BACK_REFERENCE, IvrService.notNullOrDefault(aclaracionIvr.cardBack.reference));
  //   formData.append(aclaracionIvr.CARD_BACK, IvrService.notNullOrDefault(aclaracionIvr.cardBack.payload));
  //   formData.append(aclaracionIvr.VOUCHER_EXTENSION, IvrService.notNullOrDefault(aclaracionIvr.voucher.extension));
  //   formData.append(aclaracionIvr.VOUCHER_REFERENCE, IvrService.notNullOrDefault(aclaracionIvr.voucher.reference));
  //   formData.append(aclaracionIvr.VOUCHER, IvrService.notNullOrDefault(aclaracionIvr.voucher.reference));
  //   return this.http.post(this._URL_ACLARACION, formData, options)
  //     .pipe(retry(2), catchError(this.handleError));
  // }

  /**
   * @deprecated
   */
  // public sendRastreo = (rastreoIvr: RastreoIvr, type: string = 'application/x-www-form-urlencoded') => {
  //   switch (type) {
  //     case 'multipart/form-data':
  //       return this.sendRastreoMultipartFormdata(rastreoIvr);
  //     default:
  //       return this.sendRastreoFormUrlencoded(rastreoIvr);
  //   }
  // }

  /**
   * @deprecated
   */
  // public sendRastreoFormUrlencoded = (rastreoIvr: RastreoIvr) => {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   });
  //   const options = {
  //     headers: headers,
  //   };
  //   const formData: HttpParams = new HttpParams()
  //     .set(rastreoIvr.ACCOUNT_NUMBER, IvrService.notNullOrDefault(rastreoIvr.accountNumber))
  //     .set(rastreoIvr.PHONE_NUMBER, IvrService.notNullOrDefault(rastreoIvr.phoneNumber))
  //     .set(rastreoIvr.STREET, IvrService.notNullOrDefault(rastreoIvr.street))
  //     .set(rastreoIvr.OUT_NUMBER, IvrService.notNullOrDefault(rastreoIvr.outNumber))
  //     .set(rastreoIvr.IN_NUMBER, IvrService.notNullOrDefault(rastreoIvr.inNumber))
  //     .set(rastreoIvr.SUBURB, IvrService.notNullOrDefault(rastreoIvr.suburb))
  //     .set(rastreoIvr.MUNICIPALITY, IvrService.notNullOrDefault(rastreoIvr.municipality))
  //     .set(rastreoIvr.ZIP_CODE, IvrService.notNullOrDefault(rastreoIvr.zipCode))
  //     .set(rastreoIvr.STATE, IvrService.notNullOrDefault(rastreoIvr.state))
  //     .set(rastreoIvr.REFERENCES, IvrService.notNullOrDefault(rastreoIvr.references))
  //     .set(rastreoIvr.LATITUDE, IvrService.notNullOrDefault(rastreoIvr.latitude))
  //     .set(rastreoIvr.LONGITUDE, IvrService.notNullOrDefault(rastreoIvr.longitude))
  //     .set(rastreoIvr.COMMENTS, IvrService.notNullOrDefault(rastreoIvr.comments));
  //   return this.http.post(this._URL_RASTREO, formData, options)
  //     .pipe(retry(2), catchError(this.handleError));
  // }

  /**
   * [TODO: El servicio aun no esta listo para recibir de esta forma] Se envia la forma como datos multipart
   * @param rastreoIvr RastreoIvr
   * @deprecated
   */
  // public sendRastreoMultipartFormdata = (rastreoIvr: RastreoIvr) => {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'multipart/form-data'
  //   });
  //   const options = {
  //     headers: headers,
  //   };
  //   const formData: FormData = new FormData();
  //   formData.append(rastreoIvr.ACCOUNT_NUMBER, IvrService.notNullOrDefault(rastreoIvr.accountNumber));
  //   formData.append(rastreoIvr.PHONE_NUMBER, IvrService.notNullOrDefault(rastreoIvr.phoneNumber));
  //   formData.append(rastreoIvr.STREET, IvrService.notNullOrDefault(rastreoIvr.street));
  //   formData.append(rastreoIvr.OUT_NUMBER, IvrService.notNullOrDefault(rastreoIvr.outNumber));
  //   formData.append(rastreoIvr.IN_NUMBER, IvrService.notNullOrDefault(rastreoIvr.inNumber));
  //   formData.append(rastreoIvr.SUBURB, IvrService.notNullOrDefault(rastreoIvr.suburb));
  //   formData.append(rastreoIvr.MUNICIPALITY, IvrService.notNullOrDefault(rastreoIvr.municipality));
  //   formData.append(rastreoIvr.ZIP_CODE, IvrService.notNullOrDefault(rastreoIvr.zipCode));
  //   formData.append(rastreoIvr.STATE, IvrService.notNullOrDefault(rastreoIvr.state));
  //   formData.append(rastreoIvr.REFERENCES, IvrService.notNullOrDefault(rastreoIvr.references));
  //   formData.append(rastreoIvr.LATITUDE, IvrService.notNullOrDefault(rastreoIvr.latitude));
  //   formData.append(rastreoIvr.LONGITUDE, IvrService.notNullOrDefault(rastreoIvr.longitude));
  //   formData.append(rastreoIvr.COMMENTS, IvrService.notNullOrDefault(rastreoIvr.comments));
  //   return this.http.post(this._URL_RASTREO, formData, options)
  //     .pipe(retry(2), catchError(this.handleError));
  // }

  // public sendRfcCurp = (rfcCurpIvr: RfcCurpIvr, type: string = 'application/x-www-form-urlencoded') => {
  //   switch (type) {
  //     case 'multipart/form-data':
  //       return this.sendRfcCurpMultipartFormdata(rfcCurpIvr);
  //     default:
  //       return this.sendRfcCurpFormUrlencoded(rfcCurpIvr);
  //   }
  // }

  /**
   * Se envia la forma como datos url-encoded
   * @param rfcCurpIvr RfcCurpIvr
   * @deprecated
   */
  // public sendRfcCurpFormUrlencoded = (rfcCurpIvr: RfcCurpIvr) => {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //   });
  //   const options = {
  //     headers: headers,
  //   };
  //
  //   const formData: HttpParams = new HttpParams()
  //     .set(rfcCurpIvr.CARD, IvrService.notNullOrDefault(rfcCurpIvr.card))
  //     .set(rfcCurpIvr.ACCOUNT_NUMBER, IvrService.notNullOrDefault(rfcCurpIvr.accountNumber))
  //     .set(rfcCurpIvr.PHONE_NUMBER, IvrService.notNullOrDefault(rfcCurpIvr.phoneNumber))
  //     .set(rfcCurpIvr.COMMENTS, IvrService.notNullOrDefault(rfcCurpIvr.comments))
  //     .set(rfcCurpIvr.INE_FRONT_EXTENSION, IvrService.notNullOrDefault(rfcCurpIvr.ineFront.extension))
  //     .set(rfcCurpIvr.INE_FRONT_REFERENCE, IvrService.notNullOrDefault(rfcCurpIvr.ineFront.reference))
  //     .set(rfcCurpIvr.INE_FRONT, !rfcCurpIvr.ineFront.reference
  //       && rfcCurpIvr.ineFront.payload ?
  //       rfcCurpIvr.ineFront.payload
  //         .replace(/\+/g, '-')
  //         .replace(/\//g, '_')
  //         .replace(/=/g, '.')
  //       : '')
  //     .set(rfcCurpIvr.INE_BACK_EXTENSION, IvrService.notNullOrDefault(rfcCurpIvr.ineBack.extension))
  //     .set(rfcCurpIvr.INE_BACK_REFERENCE, IvrService.notNullOrDefault(rfcCurpIvr.ineBack.reference))
  //     .set(rfcCurpIvr.INE_BACK, !rfcCurpIvr.ineBack.reference
  //       && rfcCurpIvr.ineBack.payload ?
  //       rfcCurpIvr.ineBack.payload
  //         .replace(/\+/g, '-')
  //         .replace(/\//g, '_')
  //         .replace(/=/g, '.')
  //       : '')
  //     .set(rfcCurpIvr.SELFIE_EXTENSION, IvrService.notNullOrDefault(rfcCurpIvr.selfie.extension))
  //     .set(rfcCurpIvr.SELFIE_REFERENCE, IvrService.notNullOrDefault(rfcCurpIvr.selfie.reference))
  //     .set(rfcCurpIvr.SELFIE, !rfcCurpIvr.selfie.reference
  //       && rfcCurpIvr.selfie.payload ?
  //       rfcCurpIvr.selfie.payload
  //         .replace(/\+/g, '-')
  //         .replace(/\//g, '_')
  //         .replace(/=/g, '.')
  //       : '')
  //     .set(rfcCurpIvr.RFC_EXTENSION, IvrService.notNullOrDefault(rfcCurpIvr.rfc.extension))
  //     .set(rfcCurpIvr.RFC_REFERENCE, IvrService.notNullOrDefault(rfcCurpIvr.rfc.reference))
  //     .set(rfcCurpIvr.RFC, !rfcCurpIvr.rfc.reference
  //       && rfcCurpIvr.rfc.payload ?
  //       rfcCurpIvr.rfc.payload
  //         .replace(/\+/g, '-')
  //         .replace(/\//g, '_')
  //         .replace(/=/g, '.')
  //       : '')
  //     .set(rfcCurpIvr.CURP_EXTENSION, IvrService.notNullOrDefault(rfcCurpIvr.curp.extension))
  //     .set(rfcCurpIvr.CURP_REFERENCE, IvrService.notNullOrDefault(rfcCurpIvr.curp.reference))
  //     .set(rfcCurpIvr.CURP, !rfcCurpIvr.rfc.reference
  //       && rfcCurpIvr.curp.payload ?
  //       rfcCurpIvr.curp.payload
  //         .replace(/\+/g, '-')
  //         .replace(/\//g, '_')
  //         .replace(/=/g, '.')
  //       : '');
  //   return this.http.post(this._URL_RFC_CURP, formData, options)
  //     .pipe(retry(2), catchError(this.handleError));
  // }

  /**
   * [TODO: El servicio aun no esta listo para recibir de esta forma] Se envia la forma como datos multipart
   * @param rfcCurpIvr RfcCurpIvr
   * @deprecated
   */
  // public sendRfcCurpMultipartFormdata = (rfcCurpIvr: RfcCurpIvr) => {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'multipart/form-data',
  //   });
  //   const options = {
  //     headers: headers,
  //   };
  //
  //   const formData: FormData = new FormData();
  //   formData.append(rfcCurpIvr.CARD, IvrService.notNullOrDefault(rfcCurpIvr.card));
  //   formData.append(rfcCurpIvr.ACCOUNT_NUMBER, IvrService.notNullOrDefault(rfcCurpIvr.accountNumber));
  //   formData.append(rfcCurpIvr.PHONE_NUMBER, IvrService.notNullOrDefault(rfcCurpIvr.accountNumber));
  //   formData.append(rfcCurpIvr.COMMENTS, IvrService.notNullOrDefault(rfcCurpIvr.comments));
  //   formData.append(rfcCurpIvr.INE_FRONT_EXTENSION, IvrService.notNullOrDefault(rfcCurpIvr.ineFront.extension));
  //   formData.append(rfcCurpIvr.INE_FRONT_REFERENCE, IvrService.notNullOrDefault(rfcCurpIvr.ineFront.reference));
  //   formData.append(rfcCurpIvr.INE_FRONT, IvrService.notNullOrDefault(rfcCurpIvr.ineFront.payload));
  //   formData.append(rfcCurpIvr.INE_BACK_EXTENSION, IvrService.notNullOrDefault(rfcCurpIvr.ineBack.extension));
  //   formData.append(rfcCurpIvr.INE_BACK_REFERENCE, IvrService.notNullOrDefault(rfcCurpIvr.ineBack.reference));
  //   formData.append(rfcCurpIvr.INE_BACK, IvrService.notNullOrDefault(rfcCurpIvr.ineBack.payload));
  //   formData.append(rfcCurpIvr.SELFIE_EXTENSION, IvrService.notNullOrDefault(rfcCurpIvr.selfie.extension));
  //   formData.append(rfcCurpIvr.SELFIE_REFERENCE, IvrService.notNullOrDefault(rfcCurpIvr.selfie.reference));
  //   formData.append(rfcCurpIvr.SELFIE, IvrService.notNullOrDefault(rfcCurpIvr.selfie.payload));
  //   formData.append(rfcCurpIvr.RFC_EXTENSION, IvrService.notNullOrDefault(rfcCurpIvr.rfc.extension));
  //   formData.append(rfcCurpIvr.RFC_REFERENCE, IvrService.notNullOrDefault(rfcCurpIvr.rfc.reference));
  //   formData.append(rfcCurpIvr.RFC, IvrService.notNullOrDefault(rfcCurpIvr.rfc.payload));
  //   formData.append(rfcCurpIvr.CURP_EXTENSION, IvrService.notNullOrDefault(rfcCurpIvr.curp.extension));
  //   formData.append(rfcCurpIvr.CURP_REFERENCE, IvrService.notNullOrDefault(rfcCurpIvr.curp.reference));
  //   formData.append(rfcCurpIvr.CURP, IvrService.notNullOrDefault(rfcCurpIvr.curp.payload));
  //   return this.http.post(this._URL_RFC_CURP, formData, options)
  //     .pipe(retry(2), catchError(this.handleError));
  // }

  /**
   * @deprecated
   */
  // public sendCambioCorreo = (cambioCorreoIvr: CambioCorreoIvr, type: string = 'application/x-www-form-urlencoded') => {
  //   switch (type) {
  //     case 'multipart/form-data':
  //       return this.sendCambioCorreoMultipartFormdata(cambioCorreoIvr);
  //     default:
  //       return this.sendCambioCorreoFormUrlencoded(cambioCorreoIvr);
  //   }
  // }

  /**
   * Se envia la forma como datos url-encoded
   * @param cambioCorreoIvr CambioCorreoIvr
   * @deprecated
   */
  // public sendCambioCorreoFormUrlencoded = (cambioCorreoIvr: CambioCorreoIvr) => {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //   });
  //   const options = {
  //     headers: headers,
  //   };
  //
  //   const formData: HttpParams = new HttpParams()
  //     .set(cambioCorreoIvr.CARD, IvrService.notNullOrDefault(cambioCorreoIvr.card))
  //     .set(cambioCorreoIvr.ACCOUNT_NUMBER, IvrService.notNullOrDefault(cambioCorreoIvr.accountNumber))
  //     .set(cambioCorreoIvr.PHONE_NUMBER, IvrService.notNullOrDefault(cambioCorreoIvr.phoneNumber))
  //     .set(cambioCorreoIvr.NEW_EMAIL, IvrService.notNullOrDefault(cambioCorreoIvr.newEmail))
  //     .set(cambioCorreoIvr.COMMENTS, IvrService.notNullOrDefault(cambioCorreoIvr.comments))
  //     .set(cambioCorreoIvr.INE_FRONT_EXTENSION, IvrService.notNullOrDefault(cambioCorreoIvr.ineFront.extension))
  //     .set(cambioCorreoIvr.INE_FRONT_REFERENCE, IvrService.notNullOrDefault(cambioCorreoIvr.ineFront.reference))
  //     .set(cambioCorreoIvr.INE_FRONT, !cambioCorreoIvr.ineFront.reference
  //       && cambioCorreoIvr.ineFront.payload ?
  //       cambioCorreoIvr.ineFront.payload
  //         .replace(/\+/g, '-')
  //         .replace(/\//g, '_')
  //         .replace(/=/g, '.')
  //       : '')
  //     .set(cambioCorreoIvr.INE_BACK_EXTENSION, IvrService.notNullOrDefault(cambioCorreoIvr.ineBack.extension))
  //     .set(cambioCorreoIvr.INE_BACK_REFERENCE, IvrService.notNullOrDefault(cambioCorreoIvr.ineBack.reference))
  //     .set(cambioCorreoIvr.INE_BACK, !cambioCorreoIvr.ineBack.reference
  //       && cambioCorreoIvr.ineBack.payload ?
  //       cambioCorreoIvr.ineBack.payload
  //         .replace(/\+/g, '-')
  //         .replace(/\//g, '_')
  //         .replace(/=/g, '.')
  //       : '')
  //     .set(cambioCorreoIvr.SELFIE_EXTENSION, IvrService.notNullOrDefault(cambioCorreoIvr.selfie.extension))
  //     .set(cambioCorreoIvr.SELFIE_REFERENCE, IvrService.notNullOrDefault(cambioCorreoIvr.selfie.reference))
  //     .set(cambioCorreoIvr.SELFIE, !cambioCorreoIvr.selfie.reference
  //       && cambioCorreoIvr.selfie.payload ?
  //       cambioCorreoIvr.selfie.payload
  //         .replace(/\+/g, '-')
  //         .replace(/\//g, '_')
  //         .replace(/=/g, '.')
  //       : '');
  //   return this.http.post(this._URL_EMAIL, formData, options)
  //     .pipe(retry(2), catchError(this.handleError));
  // }

  /**
   * [TODO: El servicio aun no esta listo para recibir de esta forma] Se envia la forma como datos multipart
   * @param cambioCorreoIvr CambioCorreoIvr
   * @deprecated
   */
  // public sendCambioCorreoMultipartFormdata = (cambioCorreoIvr: CambioCorreoIvr) => {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'multipart/form-data',
  //   });
  //   const options = {
  //     headers: headers,
  //   };
  //
  //   const formData: FormData = new FormData();
  //   formData.append(cambioCorreoIvr.CARD, IvrService.notNullOrDefault(cambioCorreoIvr.card));
  //   formData.append(cambioCorreoIvr.ACCOUNT_NUMBER, IvrService.notNullOrDefault(cambioCorreoIvr.accountNumber));
  //   formData.append(cambioCorreoIvr.PHONE_NUMBER, IvrService.notNullOrDefault(cambioCorreoIvr.accountNumber));
  //   formData.append(cambioCorreoIvr.NEW_EMAIL, IvrService.notNullOrDefault(cambioCorreoIvr.newEmail));
  //   formData.append(cambioCorreoIvr.COMMENTS, IvrService.notNullOrDefault(cambioCorreoIvr.comments));
  //   formData.append(cambioCorreoIvr.INE_FRONT_EXTENSION, IvrService.notNullOrDefault(cambioCorreoIvr.ineFront.extension));
  //   formData.append(cambioCorreoIvr.INE_FRONT_REFERENCE, IvrService.notNullOrDefault(cambioCorreoIvr.ineFront.reference));
  //   formData.append(cambioCorreoIvr.INE_FRONT, IvrService.notNullOrDefault(cambioCorreoIvr.ineFront.payload));
  //   formData.append(cambioCorreoIvr.INE_BACK_EXTENSION, IvrService.notNullOrDefault(cambioCorreoIvr.ineBack.extension));
  //   formData.append(cambioCorreoIvr.INE_BACK_REFERENCE, IvrService.notNullOrDefault(cambioCorreoIvr.ineBack.reference));
  //   formData.append(cambioCorreoIvr.INE_BACK, IvrService.notNullOrDefault(cambioCorreoIvr.ineBack.payload));
  //   formData.append(cambioCorreoIvr.SELFIE_EXTENSION, IvrService.notNullOrDefault(cambioCorreoIvr.selfie.extension));
  //   formData.append(cambioCorreoIvr.SELFIE_REFERENCE, IvrService.notNullOrDefault(cambioCorreoIvr.selfie.reference));
  //   formData.append(cambioCorreoIvr.SELFIE, IvrService.notNullOrDefault(cambioCorreoIvr.selfie.payload));
  //   return this.http.post(this._URL_EMAIL, formData, options)
  //     .pipe(retry(2), catchError(this.handleError));
  // }

  /**
   * @deprecated
   */
  // public sendCambioTelefono = (cambioTelefonoIvr: CambioTelefonoIvr, type: string = 'application/x-www-form-urlencoded') => {
  //   switch (type) {
  //     case 'multipart/form-data':
  //       return this.sendCambioTelefonoMultipartFormdata(cambioTelefonoIvr);
  //     default:
  //       return this.sendCambioTelefonoFormUrlencoded(cambioTelefonoIvr);
  //   }
  // }

  /**
   * Se envia la forma como datos url-encoded
   * @param cambioTelefonoIvr CambioTelefonoIvr
   * @deprecated
   */
  // public sendCambioTelefonoFormUrlencoded = (cambioTelefonoIvr: CambioTelefonoIvr) => {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //   });
  //   const options = {
  //     headers: headers,
  //   };
  //
  //   const formData: HttpParams = new HttpParams()
  //     .set(cambioTelefonoIvr.CARD, IvrService.notNullOrDefault(cambioTelefonoIvr.card))
  //     .set(cambioTelefonoIvr.ACCOUNT_NUMBER, IvrService.notNullOrDefault(cambioTelefonoIvr.accountNumber))
  //     .set(cambioTelefonoIvr.PHONE_NUMBER, IvrService.notNullOrDefault(cambioTelefonoIvr.phoneNumber))
  //     .set(cambioTelefonoIvr.NEW_PHONE_NUMBER, IvrService.notNullOrDefault(cambioTelefonoIvr.newPhoneNumber))
  //     .set(cambioTelefonoIvr.COMMENTS, IvrService.notNullOrDefault(cambioTelefonoIvr.comments))
  //     .set(cambioTelefonoIvr.INE_FRONT_EXTENSION, IvrService.notNullOrDefault(cambioTelefonoIvr.ineFront.extension))
  //     .set(cambioTelefonoIvr.INE_FRONT_REFERENCE, IvrService.notNullOrDefault(cambioTelefonoIvr.ineFront.reference))
  //     .set(cambioTelefonoIvr.INE_FRONT, !cambioTelefonoIvr.ineFront.reference
  //       && cambioTelefonoIvr.ineFront.payload ?
  //       cambioTelefonoIvr.ineFront.payload
  //         .replace(/\+/g, '-')
  //         .replace(/\//g, '_')
  //         .replace(/=/g, '.')
  //       : '')
  //     .set(cambioTelefonoIvr.INE_BACK_EXTENSION, IvrService.notNullOrDefault(cambioTelefonoIvr.ineBack.extension))
  //     .set(cambioTelefonoIvr.INE_BACK_REFERENCE, IvrService.notNullOrDefault(cambioTelefonoIvr.ineBack.reference))
  //     .set(cambioTelefonoIvr.INE_BACK, !cambioTelefonoIvr.ineBack.reference
  //       && cambioTelefonoIvr.ineBack.payload ?
  //       cambioTelefonoIvr.ineBack.payload
  //         .replace(/\+/g, '-')
  //         .replace(/\//g, '_')
  //         .replace(/=/g, '.')
  //       : '')
  //     .set(cambioTelefonoIvr.SELFIE_EXTENSION, IvrService.notNullOrDefault(cambioTelefonoIvr.selfie.extension))
  //     .set(cambioTelefonoIvr.SELFIE_REFERENCE, IvrService.notNullOrDefault(cambioTelefonoIvr.selfie.reference))
  //     .set(cambioTelefonoIvr.SELFIE, !cambioTelefonoIvr.selfie.reference
  //       && cambioTelefonoIvr.selfie.payload ?
  //       cambioTelefonoIvr.selfie.payload
  //         .replace(/\+/g, '-')
  //         .replace(/\//g, '_')
  //         .replace(/=/g, '.')
  //       : '');
  //   return this.http.post(this._URL_PHONE_NUMBER, formData, options)
  //     .pipe(retry(2), catchError(this.handleError));
  // }

  /**
   * [TODO: El servicio aun no esta listo para recibir de esta forma] Se envia la forma como datos multipart
   * @param cambioTelefonoIvr CambioTelefonoIvr
   * @deprecated
   */
  // public sendCambioTelefonoMultipartFormdata = (cambioTelefonoIvr: CambioTelefonoIvr) => {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'multipart/form-data',
  //   });
  //   const options = {
  //     headers: headers,
  //   };
  //
  //   const formData: FormData = new FormData();
  //   formData.append(cambioTelefonoIvr.CARD, IvrService.notNullOrDefault(cambioTelefonoIvr.card));
  //   formData.append(cambioTelefonoIvr.ACCOUNT_NUMBER, IvrService.notNullOrDefault(cambioTelefonoIvr.accountNumber));
  //   formData.append(cambioTelefonoIvr.PHONE_NUMBER, IvrService.notNullOrDefault(cambioTelefonoIvr.accountNumber));
  //   formData.append(cambioTelefonoIvr.NEW_PHONE_NUMBER, IvrService.notNullOrDefault(cambioTelefonoIvr.newPhoneNumber));
  //   formData.append(cambioTelefonoIvr.COMMENTS, IvrService.notNullOrDefault(cambioTelefonoIvr.comments));
  //   formData.append(cambioTelefonoIvr.INE_FRONT_EXTENSION, IvrService.notNullOrDefault(cambioTelefonoIvr.ineFront.extension));
  //   formData.append(cambioTelefonoIvr.INE_FRONT_REFERENCE, IvrService.notNullOrDefault(cambioTelefonoIvr.ineFront.reference));
  //   formData.append(cambioTelefonoIvr.INE_FRONT, IvrService.notNullOrDefault(cambioTelefonoIvr.ineFront.payload));
  //   formData.append(cambioTelefonoIvr.INE_BACK_EXTENSION, IvrService.notNullOrDefault(cambioTelefonoIvr.ineBack.extension));
  //   formData.append(cambioTelefonoIvr.INE_BACK_REFERENCE, IvrService.notNullOrDefault(cambioTelefonoIvr.ineBack.reference));
  //   formData.append(cambioTelefonoIvr.INE_BACK, IvrService.notNullOrDefault(cambioTelefonoIvr.ineBack.payload));
  //   formData.append(cambioTelefonoIvr.SELFIE_EXTENSION, IvrService.notNullOrDefault(cambioTelefonoIvr.selfie.extension));
  //   formData.append(cambioTelefonoIvr.SELFIE_REFERENCE, IvrService.notNullOrDefault(cambioTelefonoIvr.selfie.reference));
  //   formData.append(cambioTelefonoIvr.SELFIE, IvrService.notNullOrDefault(cambioTelefonoIvr.selfie.payload));
  //   return this.http.post(this._URL_PHONE_NUMBER, formData, options)
  //     .pipe(retry(2), catchError(this.handleError));
  // }

  /**
   * @deprecated
   */
  // public sendCambioDireccion = (cambioDireccionIvr: CambioDireccionIvr, type: string = 'application/x-www-form-urlencoded') => {
  //   switch (type) {
  //     case 'multipart/form-data':
  //       return this.sendCambioDireccionMultipartFormdata(cambioDireccionIvr);
  //     default:
  //       return this.sendCambioDireccionFormUrlencoded(cambioDireccionIvr);
  //   }
  // }

  /**
   * Se envia la forma como datos url-encoded
   * @param cambioDireccionIvr CambioDireccionIvr
   * @deprecated
   */
  // public sendCambioDireccionFormUrlencoded = (cambioDireccionIvr: CambioDireccionIvr) => {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //   });
  //   const options = {
  //     headers: headers,
  //   };
  //
  //   const formData: HttpParams = new HttpParams()
  //     .set(cambioDireccionIvr.CARD, IvrService.notNullOrDefault(cambioDireccionIvr.card))
  //     .set(cambioDireccionIvr.ACCOUNT_NUMBER, IvrService.notNullOrDefault(cambioDireccionIvr.accountNumber))
  //     .set(cambioDireccionIvr.PHONE_NUMBER, IvrService.notNullOrDefault(cambioDireccionIvr.phoneNumber))
  //     .set(cambioDireccionIvr.STREET, IvrService.notNullOrDefault(cambioDireccionIvr.street))
  //     .set(cambioDireccionIvr.OUT_NUMBER, IvrService.notNullOrDefault(cambioDireccionIvr.outNumber))
  //     .set(cambioDireccionIvr.IN_NUMBER, IvrService.notNullOrDefault(cambioDireccionIvr.inNumber))
  //     .set(cambioDireccionIvr.SUBURB, IvrService.notNullOrDefault(cambioDireccionIvr.suburb))
  //     .set(cambioDireccionIvr.MUNICIPALITY, IvrService.notNullOrDefault(cambioDireccionIvr.municipality))
  //     .set(cambioDireccionIvr.ZIP_CODE, IvrService.notNullOrDefault(cambioDireccionIvr.zipCode))
  //     .set(cambioDireccionIvr.REFERENCES, IvrService.notNullOrDefault(cambioDireccionIvr.references))
  //     .set(cambioDireccionIvr.LATITUDE, IvrService.notNullOrDefault(cambioDireccionIvr.latitude))
  //     .set(cambioDireccionIvr.LONGITUDE, IvrService.notNullOrDefault(cambioDireccionIvr.longitude))
  //     .set(cambioDireccionIvr.COMMENTS, IvrService.notNullOrDefault(cambioDireccionIvr.comments))
  //     .set(cambioDireccionIvr.INE_FRONT_EXTENSION, IvrService.notNullOrDefault(cambioDireccionIvr.ineFront.extension))
  //     .set(cambioDireccionIvr.INE_FRONT_REFERENCE, IvrService.notNullOrDefault(cambioDireccionIvr.ineFront.reference))
  //     .set(cambioDireccionIvr.INE_FRONT, !cambioDireccionIvr.ineFront.reference
  //       && cambioDireccionIvr.ineFront.payload ?
  //       cambioDireccionIvr.ineFront.payload
  //         .replace(/\+/g, '-')
  //         .replace(/\//g, '_')
  //         .replace(/=/g, '.')
  //       : '')
  //     .set(cambioDireccionIvr.INE_BACK_EXTENSION, IvrService.notNullOrDefault(cambioDireccionIvr.ineBack.extension))
  //     .set(cambioDireccionIvr.INE_BACK_REFERENCE, IvrService.notNullOrDefault(cambioDireccionIvr.ineBack.reference))
  //     .set(cambioDireccionIvr.INE_BACK, !cambioDireccionIvr.ineBack.reference
  //       && cambioDireccionIvr.ineBack.payload ?
  //       cambioDireccionIvr.ineBack.payload
  //         .replace(/\+/g, '-')
  //         .replace(/\//g, '_')
  //         .replace(/=/g, '.')
  //       : '')
  //     .set(cambioDireccionIvr.SELFIE_EXTENSION, IvrService.notNullOrDefault(cambioDireccionIvr.selfie.extension))
  //     .set(cambioDireccionIvr.SELFIE_REFERENCE, IvrService.notNullOrDefault(cambioDireccionIvr.selfie.reference))
  //     .set(cambioDireccionIvr.SELFIE, !cambioDireccionIvr.selfie.reference
  //       && cambioDireccionIvr.selfie.payload ?
  //       cambioDireccionIvr.selfie.payload
  //         .replace(/\+/g, '-')
  //         .replace(/\//g, '_')
  //         .replace(/=/g, '.')
  //       : '')
  //     .set(cambioDireccionIvr.PROOF_OF_RESIDENCY_EXTENSION, IvrService.notNullOrDefault(cambioDireccionIvr.proofOfResidency.extension))
  //     .set(cambioDireccionIvr.PROOF_OF_RESIDENCY_REFERENCE, IvrService.notNullOrDefault(cambioDireccionIvr.proofOfResidency.reference))
  //     .set(cambioDireccionIvr.PROOF_OF_RESIDENCY, !cambioDireccionIvr.proofOfResidency.reference
  //       && cambioDireccionIvr.proofOfResidency.payload ?
  //       cambioDireccionIvr.proofOfResidency.payload
  //         .replace(/\+/g, '-')
  //         .replace(/\//g, '_')
  //         .replace(/=/g, '.')
  //       : '');
  //   return this.http.post(this._URL_ADDRESS, formData, options)
  //     .pipe(retry(2), catchError(this.handleError));
  // }

  /**
   * [TODO: El servicio aun no esta listo para recibir de esta forma] Se envia la forma como datos multipart
   * @param cambioDireccionIvr CambioDireccionIvr
   * @deprecated
   */
  // public sendCambioDireccionMultipartFormdata = (cambioDireccionIvr: CambioDireccionIvr) => {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'multipart/form-data',
  //   });
  //   const options = {
  //     headers: headers,
  //   };
  //
  //   const formData: FormData = new FormData();
  //   formData.append(cambioDireccionIvr.CARD, IvrService.notNullOrDefault(cambioDireccionIvr.card));
  //   formData.append(cambioDireccionIvr.ACCOUNT_NUMBER, IvrService.notNullOrDefault(cambioDireccionIvr.accountNumber));
  //   formData.append(cambioDireccionIvr.PHONE_NUMBER, IvrService.notNullOrDefault(cambioDireccionIvr.accountNumber));
  //   formData.append(cambioDireccionIvr.STREET, IvrService.notNullOrDefault(cambioDireccionIvr.street));
  //   formData.append(cambioDireccionIvr.OUT_NUMBER, IvrService.notNullOrDefault(cambioDireccionIvr.outNumber));
  //   formData.append(cambioDireccionIvr.IN_NUMBER, IvrService.notNullOrDefault(cambioDireccionIvr.inNumber));
  //   formData.append(cambioDireccionIvr.SUBURB, IvrService.notNullOrDefault(cambioDireccionIvr.suburb));
  //   formData.append(cambioDireccionIvr.MUNICIPALITY, IvrService.notNullOrDefault(cambioDireccionIvr.municipality));
  //   formData.append(cambioDireccionIvr.ZIP_CODE, IvrService.notNullOrDefault(cambioDireccionIvr.zipCode));
  //   formData.append(cambioDireccionIvr.REFERENCES, IvrService.notNullOrDefault(cambioDireccionIvr.references));
  //   formData.append(cambioDireccionIvr.LATITUDE, IvrService.notNullOrDefault(cambioDireccionIvr.latitude));
  //   formData.append(cambioDireccionIvr.LONGITUDE, IvrService.notNullOrDefault(cambioDireccionIvr.longitude));
  //   formData.append(cambioDireccionIvr.COMMENTS, IvrService.notNullOrDefault(cambioDireccionIvr.comments));
  //   formData.append(cambioDireccionIvr.INE_FRONT_EXTENSION, IvrService.notNullOrDefault(cambioDireccionIvr.ineFront.extension));
  //   formData.append(cambioDireccionIvr.INE_FRONT_REFERENCE, IvrService.notNullOrDefault(cambioDireccionIvr.ineFront.reference));
  //   formData.append(cambioDireccionIvr.INE_FRONT, IvrService.notNullOrDefault(cambioDireccionIvr.ineFront.payload));
  //   formData.append(cambioDireccionIvr.INE_BACK_EXTENSION, IvrService.notNullOrDefault(cambioDireccionIvr.ineBack.extension));
  //   formData.append(cambioDireccionIvr.INE_BACK_REFERENCE, IvrService.notNullOrDefault(cambioDireccionIvr.ineBack.reference));
  //   formData.append(cambioDireccionIvr.INE_BACK, IvrService.notNullOrDefault(cambioDireccionIvr.ineBack.payload));
  //   formData.append(cambioDireccionIvr.SELFIE_EXTENSION, IvrService.notNullOrDefault(cambioDireccionIvr.selfie.extension));
  //   formData.append(cambioDireccionIvr.SELFIE_REFERENCE, IvrService.notNullOrDefault(cambioDireccionIvr.selfie.reference));
  //   formData.append(cambioDireccionIvr.SELFIE, IvrService.notNullOrDefault(cambioDireccionIvr.selfie.payload));
  //   formData.append(cambioDireccionIvr.PROOF_OF_RESIDENCY_EXTENSION,
  //     IvrService.notNullOrDefault(cambioDireccionIvr.proofOfResidency.extension));
  //   formData.append(cambioDireccionIvr.PROOF_OF_RESIDENCY_REFERENCE,
  //     IvrService.notNullOrDefault(cambioDireccionIvr.proofOfResidency.reference));
  //   formData.append(cambioDireccionIvr.PROOF_OF_RESIDENCY, IvrService.notNullOrDefault(cambioDireccionIvr.proofOfResidency.payload));
  //   return this.http.post(this._URL_ADDRESS, formData, options)
  //     .pipe(retry(2), catchError(this.handleError));
  // }

  /**
   * @param error HttpErrorResponse
   */
  private handleError = (error: HttpErrorResponse) => {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.log(`Backend returned code ${error.status}, ` + `body was:`, error.error);
    }
    // Return an observable with a user-facing error message.
    const response = error.error;
    response.status_code = error.status;
    return throwError(response);
  }
}
