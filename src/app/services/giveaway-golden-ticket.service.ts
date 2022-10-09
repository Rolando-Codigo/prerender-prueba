import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GanadoresGolden } from '../models/ganadores.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiveawayGoldenTicketService {
  private urlBase = '/promocionales-portal';
  // // PROD
  // private _URL = 'https://giveaway.heybanco.com';
  // // QA
  // private _URL = 'https://promocionales-portal-nepor.brmtocp.banregio.com';
  // // DEV
  // private _URL = 'https://promocionales-portal-next-portales.brmdocp.banregio.com';
  // LOCAL
  // private _URL = 'http://localhost:8080';

  private _URL_CANJEAR = `${this.urlBase}/premiados/canjear/`;
  private _URL_PREMIO = `${this.urlBase}/premiados/`;
  private _URL_ESTADISTICAS = `${this.urlBase}/premiados/estadisticas/`;
  private _URL_CONTADORES = `${this.urlBase}/premiados/estadisticas`;

  constructor(private http: HttpClient) { }

  public consultarPremio(clavePremio: string, captcha: string, host: string) {
    return this.http.get<any>(this._URL_PREMIO + captcha + '/' + host + '?clave=' + clavePremio );
  }

  public canjearPremio(premioModel: GanadoresGolden, captcha: string, host: string) {
    return this.http.post<any>(this._URL_CANJEAR  + captcha + '/' + host , premioModel);
  }

  public consultarEstadisticas(clavePromocional: string, captcha: string, host: string) {
    return this.http.get<any>(this._URL_ESTADISTICAS + captcha + '/' + host + '?idPromocional=' + clavePromocional );
  }

  public contadorGiveaway(id: string, recaptchaToken: string, host: string): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = {
      headers: headers,
    };

    return this.http.post<any>(this.urlBase + '/click-giveaway/contador/' + recaptchaToken + '/' + host, id, options);
  }

}
