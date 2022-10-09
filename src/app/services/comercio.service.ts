import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ComercioModel } from 'src/app/models/persona/comercio/comercio.model';


@Injectable({
    providedIn: 'root'
})

export class ComercioService {

    private path = '/cms-portal';

    constructor(private http: HttpClient) { }

    obtenerComercioEstados(estado: string, captcha: string, host: string): Observable<ComercioModel[]> {
        return this.http.get<any>(`${this.path}/comercios/filtro/estado/${captcha}/${host}?estado=${estado}` );
    }

    obtenerComercioColonia(estado: string, colonia: string, captcha: string, host: string): Observable<ComercioModel[]> {
        return this.http.get<any>(`${this.path}/comercios/filtro/colonia/${captcha}/${host}?estado=${estado}&colonia=${colonia}`);
    }

    obtenerComercioPalabra(palabra: string, captcha: string, host: string): Observable<ComercioModel[]> {
        return this.http.get<any>(`${this.path}/comercios/filtro/palabra/${captcha}/${host}?palabra=${palabra}` );
    }
}
