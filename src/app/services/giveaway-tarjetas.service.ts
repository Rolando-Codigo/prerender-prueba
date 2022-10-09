import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GiveawayTarjetasService {
    private urlBase = '/promocionales-portal';
    private urlIP = 'https://api.ipify.org?format=json';
    // DEV
    // private _URL = 'https://promocionales-portal-next-portales.brmdocp.banregio.com';

    // QA
    // private _URL = 'https://promocionales-portal-nepor.brmtocp.banregio.com';

    // PROD
    // private _URL = 'https://giveaway.heybanco.com';


    private _URL_ALTA = `${this.urlBase}/tarjetas`;
    private IP_ADDRESS: string = null;

    constructor(private http: HttpClient) {
        this.getIpAddress().subscribe();
    }

    private assertIpAddess(): Observable<string> {
        return this.IP_ADDRESS != null ? new Observable<string>((observer) => {
          observer.next(this.IP_ADDRESS);
        }) : this.getIpAddress();
    }

    altaTarjeta(tarjetas: any): Observable<string> {

        return new Observable<string>((sub) => {
            this.assertIpAddess().subscribe( ip => {
                tarjetas.tarjetas.ip = ip;
                return this.http.post<any>(`${this._URL_ALTA}`, tarjetas).subscribe( response => {
                    sub.next(response);
                }, err => {
                    sub.error(err);
                });
            });
        });
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
    private requestIPAddress(): Observable<Object> {
        return this.http.get(this.urlIP);
    }
}
