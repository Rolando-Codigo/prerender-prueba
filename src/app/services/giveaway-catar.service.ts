import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FoliosCatar } from '../models/giveaway/giveaway-participacion-catar';
import { Observable } from 'rxjs';
import { GiveawayParticipacionAhorroError } from '../models/giveaway/giveaway-participacion-ahorro-error';

@Injectable({
  providedIn: 'root'
})
export class GiveawayCatarService {
  private urlBase = '/promocionales-portal';
  private _URL_ALTA = `${this.urlBase}/folios`;

  constructor(private http: HttpClient) { }

  public consultarPremio(clavePremio: string, captcha: string, host: string) {
    return this.http.get<any>(this._URL_ALTA + captcha + '/' + host + '?clave=' + clavePremio );
  }

  public getFolios(clave: string, captcha: string, host: string) {
    const json = {
      participante: {
        clave: clave
      },
      captcha: captcha,
      host: host
    };
    
    // return this.http.post<any>(`${this.urlBase}/folios`, json);
    return this.http.post<any>(`${this.urlBase}/folios`, json);
  }
}
