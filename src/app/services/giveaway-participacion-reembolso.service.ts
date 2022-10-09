import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { GiveawayParticipacionAhorroAltaClave } from '../models/giveaway/giveaway-participacion-ahorro-alta-clave';
import { GiveawayParticipacionAhorroContador } from '../models/giveaway/giveaway-participacion-ahorro-contador';
import { GiveawayParticipacionAhorroError } from '../models/giveaway/giveaway-participacion-ahorro-error';

@Injectable({
  providedIn: 'root'
})
export class GiveawayParticipacionReembolsoService {
  private urlBase = '/promocionales-portal';
  private urlIP = 'https://api.ipify.org?format=json';
  // // PROD
  // private _URL = 'https://giveaway.heybanco.com';
  // // QA
  // private _URL = 'https://promocionales-portal-nepor.brmtocp.banregio.com';
  // // DEV
  // private _URL = 'https://promocionales-portal-next-portales.brmdocp.banregio.com';
  // MIKE
  // private _URL = 'http://localhost:8080';

  private _URL_ALTA = `${this.urlBase}/participacion-giveaway/alta/`;
  private _URL_CONTADOR = `${this.urlBase}/participacion-giveaway/contador`;
  private IP_ADDRESS: string = '';

  constructor(private http: HttpClient) {
    this.getIpAddress().subscribe();
  }

  public alta(participacion: any, recaptchaToken: string, host: string): Observable<GiveawayParticipacionAhorroAltaClave> {
    return new Observable<GiveawayParticipacionAhorroAltaClave>((observer) => {
      this.assertIpAddess().subscribe((ip) => {
        participacion.ip = ip;

        this.postJson<GiveawayParticipacionAhorroAltaClave>(this._URL_ALTA + recaptchaToken + '/' + host,
         participacion).subscribe((response) => {
          observer.next(response);
        },
          (error) => {
            this.errorHandler(observer, error);
          },
          () => {
            observer.complete();
          });

      }, (error => {
        observer.error(new GiveawayParticipacionAhorroError('', 'get-ip', 'ERROR_REQUEST', 'cant_get_ip_address_from_service', -1));

      }), () => {
        observer.complete();
      });
    });
  }

  public contador(recaptchaToken: string, promocion: string, host: string): Observable<GiveawayParticipacionAhorroContador> {
    return new Observable<GiveawayParticipacionAhorroContador>((observer) => {
      // participacion_referidos participacion_referidos
      const url = `${this._URL_CONTADOR}?fecha=${this.formatDate()}&promocion=${promocion}&captcha=${recaptchaToken}&host=${host}`;
      this.http.get(url).subscribe( (response) => {
        observer.next(response as GiveawayParticipacionAhorroContador);
      },
        (error) => {
          this.errorHandler(observer, error);
        },
        () => {
          observer.complete();
        });
    });
  }

  formatDate() {
    const d = new Date();
    let month = '' + (d.getMonth() + 1),
        day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) {
        month = '0' + month;
    }
    if (day.length < 2) {
        day = '0' + day;
    }

    return [day, month, year].join('-');
}

  private postJson<T>(url: string, payload?: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = {
      headers: headers,
    };

    return this.http.post<T>(url, JSON.stringify(payload), options);
  }

  private getJson<T>(url: string, payload?: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = {
      headers: headers,
      // body: JSON.stringify(payload)
    };

    // return this.http.get<T>(url, JSON.stringify(payload), options);
    // return this.http.request<T>('GET', url, options);
    return this.http.post(url, JSON.stringify(payload), options);
  }

  private requestIPAddress(): Observable<Object> {
    return this.http.get(this.urlIP);
  }

  private getIpAddress(): Observable<string> {
    return new Observable<string>((observer) => {
      this.requestIPAddress().subscribe((res: any) => {
        this.IP_ADDRESS = res.ip;
        observer.next(this.IP_ADDRESS);
      }, (error: any) => {
        observer.error(error);
      }, () => {
        observer.complete();
      });
    });
  }

  private assertIpAddess(): Observable<string> {
    return this.IP_ADDRESS != null ? new Observable<string>((observer) => {
      observer.next(this.IP_ADDRESS);
    }) : this.getIpAddress();
  }

  private errorHandler(observer: any, error: any) {
    if (error instanceof HttpErrorResponse) {
      const errorResponse = new GiveawayParticipacionAhorroError;
      if (error.error && !(error.error instanceof String) && !(error.error instanceof ProgressEvent)) {
        Object.assign(errorResponse, error.error);
      } else {
        errorResponse.traceid = '';
        errorResponse.code = 'UNKNOWN_ERROR';
        errorResponse.error = error.statusText;
        errorResponse.message = error.message;
        errorResponse.status = error.status;
        errorResponse.timestamp = '';
      }
      observer.error(errorResponse);
    } else {
      observer.error(error);
    }
  }
}
