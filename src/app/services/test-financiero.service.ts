import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestFinancieroService {
  private _URL = '/promocionales-portal';
  // // PROD
  // private _URL = 'https://giveaway.heybanco.com';
  // // QA
  // private _URL = 'https://promocionales-portal-nepor.brmtocp.banregio.com';
  // // DEV
  // private _URL = 'https://promocionales-portal-next-portales.brmdocp.banregio.com/tests';
  // Local
  // private _URL = 'http://localhost:8080/tests'


  constructor(
    private http: HttpClient
  ) { }

  altaTest(testModel: any): Observable<any> {
    return this.http.post<any>(`${this._URL}/tests`, testModel);
  }

  getPuntosHey() {
    return this.http.get<any>(`${this._URL}/tests/lista-punto-hey`);
  }

  getAsesoresHeyPuntos(puntoHey: any) {
    return this.http.post<any>(`${this._URL}/tests/lista-asesor-punto-hey`, puntoHey);
  }
}
