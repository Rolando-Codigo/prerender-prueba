import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RespuestaGenericaModel } from '../models/respuesta-generica.model';

@Injectable({
  providedIn: 'root'
})
export class DatosGeograficosService {
  public endpoint: string;
  constructor(private http: HttpClient) {
    this.endpoint = 'https://ocw-catalogo-ocw-develop.brmdocp.banregio.com';
    // this.endpoint = '/ocw-catalogo';
   }

  public consultaEstados(): Observable<any> {
    console.log('endPoind', `${this.endpoint}/estados`);
    return this.http.get<any>(`${this.endpoint}/estados`);
  }

  public consultaMunicipios(estado: string): Observable<any> {
    return this.http.get<any>(`${this.endpoint}/municipios?entidad=${estado}`);
  }

  public consultaColonias(codigoPostal: string): Observable<RespuestaGenericaModel<any>> {
    return this.http.get<RespuestaGenericaModel<any>>(`${this.endpoint}/colonias/${codigoPostal}`);
  }

  public consultaSucursales(): Observable<any> {
    return this.http.get<any>(`${this.endpoint}/sucursales/ubicacion`);
  }

  public consultaEstadoPorId(estado: string): Observable<any> {
    return this.http.get<any>(`${this.endpoint}/estado/${estado}`);
  }

  public consultaSucursalesPorCoordenadas(latitud: any, longitud: any): Observable<any> {
    return this.http.get<any>(`${this.endpoint}/sucursales/ubicacionGeolocalizacion?latitud=${latitud}&longitud=${longitud}`);
  }
}

