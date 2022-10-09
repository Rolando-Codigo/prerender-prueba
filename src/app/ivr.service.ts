import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {FallaIvr} from './falla-ivr';
import {DesbloqueoIvr} from './desbloqueo-ivr';
import {ImagenIvr} from './imagen-ivr';
import {ImagenResponseIvr} from './imagen-response-ivr';
import {AsesoriaIvr} from './asesoria-ivr';
import {SugerenciaIvr} from './sugerencia-ivr';

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

  constructor(private http: HttpClient) {
    this.host = 'banco.hey.inc';
  }

  // TODO: CAMBIAR A PRODUCTIVA CUANDO SEA EL MOMENTO
  // private _URL = '/us-central-ivr';
  private _URL = 'https://us-central1-cac-brprod.cloudfunctions.net/PortalHeyIVRFormFunctions';
  // DESARROLLO
  // private _URL = 'https://us-central1-banregiolabs-whatsapp-250421.cloudfunctions.net/PortalHeyReportesFunction';
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
      .set(DesbloqueoIvr.TIPOCASO, IvrService.notNullOrDefault(fallaIvr.tipoCaso))
      .set(DesbloqueoIvr.MOTIVOCASO, IvrService.notNullOrDefault(fallaIvr.motivoCaso))
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
      // .set(AsesoriaIvr.PRODUCT, IvrService.notNullOrDefault(asesoriaIvr.product))
      .set(AsesoriaIvr.COMMENTS, IvrService.notNullOrDefault(asesoriaIvr.comments))
      .set(DesbloqueoIvr.TIPOCASO, IvrService.notNullOrDefault(asesoriaIvr.tipoCaso))
      .set(DesbloqueoIvr.MOTIVOCASO, IvrService.notNullOrDefault(asesoriaIvr.motivoCaso))
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
      .set(SugerenciaIvr.TIPOCASO, IvrService.notNullOrDefault(sugerenciaIvr.tipoCaso))
      .set(SugerenciaIvr.MOTIVOCASO, IvrService.notNullOrDefault(sugerenciaIvr.motivoCaso))
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
