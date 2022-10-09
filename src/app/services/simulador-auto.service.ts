import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimuladorAutoService {
  private urlBase = '/promocionales-portal';
  // // PROD
  // private _URL = 'https://giveaway.heybanco.com';
  // // QA
  // private _URL = 'https://promocionales-portal-nepor.brmtocp.banregio.com';
  // // DEV
  // private _URL = 'https://promocionales-portal-next-portales.brmdocp.banregio.com/simulador-auto/';
  // LOCAL
  // private _URL = 'http://localhost:8080/simulador-auto/';

  constructor(private http: HttpClient) {

  }

  public solicitarSeguimiento(model: any, recaptchaToken: string, host: string): Observable<any> {
    return new Observable<any>((observer) => {

      this.http.post(this.urlBase + recaptchaToken + '/' + host, JSON.stringify(model)).subscribe((response) => {
        observer.next(response);
      },
        (error) => {
          observer.error(error);
        },
        () => {
          observer.complete();
        });
    });
  }

}
