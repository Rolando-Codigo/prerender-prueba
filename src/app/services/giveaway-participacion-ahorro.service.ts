import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, PartialObserver, Subscription, throwError } from 'rxjs';
import { GiveawayParticipacionAhorroAltaClave } from '../models/giveaway/giveaway-participacion-ahorro-alta-clave';
import { GiveawayParticipacionAhorroContador } from '../models/giveaway/giveaway-participacion-ahorro-contador';
import { GiveawayParticipacionAhorroError } from '../models/giveaway/giveaway-participacion-ahorro-error';

@Injectable({
  providedIn: 'root'
})
export class GiveawayParticipacionAhorroService {
  private urlBase = '/promocionales-portal';
  private urlIP = 'https://api.ipify.org?format=json';
  // // PROD
  // private _URL = 'https://giveaway.heybanco.com';
  // // QA
  // private _URL = 'https://promocionales-portal-nepor.brmtocp.banregio.com';
  // // DEV
  // private _URL = 'https://promocionales-portal-next-portales.brmdocp.banregio.com';
  // MIKE
  // private _URL = 'http://189.152.81.124';

  private _URL_ALTA = `${this.urlBase}/click/altaclave/`;
  private _URL_CONTADOR = `${this.urlBase}/click/contador/`;
  private IP_ADDRESS: string = null;

  constructor(private http: HttpClient) {
    this.getIpAddress().subscribe();
  }

  public altaClave(clave: string, recaptchaToken: string, host: string): Observable<GiveawayParticipacionAhorroAltaClave> {
    return new Observable<GiveawayParticipacionAhorroAltaClave>((observer) => {
      this.assertIpAddess().subscribe((ip) => {
        const payload = {
          'participante': {
            'clave': clave
          },
          'ip': ip
        };

        this.postJson<GiveawayParticipacionAhorroAltaClave>(this._URL_ALTA + recaptchaToken + '/' + host, payload).subscribe((response) => {
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

  public contador(ano: string, mes: number, recaptchaToken: string, host: string): Observable<GiveawayParticipacionAhorroContador> {
    return new Observable<GiveawayParticipacionAhorroContador>((observer) => {
      const payload = {
        'participante': {},
        'annio': ano,
        'mes': mes,
      };

      this.postJson<GiveawayParticipacionAhorroContador>(this._URL_CONTADOR + recaptchaToken + '/' + host,
      payload).subscribe((response) => {
        observer.next(response);
      },
        (error) => {
          this.errorHandler(observer, error);
        },
        () => {
          observer.complete();
        });
    });
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

  private errorHandler(observer, error) {
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
