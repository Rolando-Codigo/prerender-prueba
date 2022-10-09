import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GiveawayParticipacionAhorroError } from '../models/giveaway/giveaway-participacion-ahorro-error';
import { ReferidosPromocionalInterface } from '../models/giveaway/referidos_promocional.model';

@Injectable({
  providedIn: 'root'
})
export class EmbajadoresHeyService {
  private urlBase = '/promocionales-portal';
  // // PROD
  // private _URL = 'https://giveaway.heybanco.com';
  // // QA
  // private _URL = 'https://promocionales-portal-nepor.brmtocp.banregio.com';
  // // DEV
  // private _URL = 'https://promocionales-portal-next-portales.brmdocp.banregio.com';
  // MIKE
  // private _URL = 'http://localhost:8080';

  private _URL_ALTA = `${this.urlBase}/referido-promocional/alta/`;
  private _URL_ALTA_REFERIDO = `${this.urlBase}/embajadores/alta/`;

  constructor(private http: HttpClient) { }

  public alta(referido: any, recaptchaToken: string, host: string): Observable<ReferidosPromocionalInterface> {
    return new Observable<ReferidosPromocionalInterface>((observer) => {
      this.postJson<ReferidosPromocionalInterface>(this._URL_ALTA + recaptchaToken + '/' + host, referido).subscribe((response) => {
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
