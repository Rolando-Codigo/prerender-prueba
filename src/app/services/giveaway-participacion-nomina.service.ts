import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, PartialObserver, Subscription, throwError } from 'rxjs';
import { GiveawayParticipacionNominaAltaClave } from '../models/giveaway/giveaway-participacion-nomina-alta-clave';
import { GiveawayParticipacionNominaContador } from '../models/giveaway/giveaway-participacion-nomina-contador';
import { GiveawayParticipacionNominaError } from '../models/giveaway/giveaway-participacion-nomina-error';

@Injectable({
  providedIn: 'root'
})
export class GiveawayParticipacionNominaService {
  private urlBase = '/promocionales-portal';
  private urlIP = 'https://api.ipify.org?format=json';
  // // // PROD
  // private _URL = 'https://giveaway.heybanco.com';
  // // QA
  // private _URL = 'https://promocionales-portal-nepor.brmtocp.banregio.com';
  // // DEV
  // private _URL = 'https://promocionales-portal-next-portales.brmdocp.banregio.com';
  // MIKE
  // private _URL = 'http://189.152.81.124';
  // Local
  // private _URL = 'http://localhost:8080';

  private _URL_ALTA = `${this.urlBase}/click/altaclave/`;
  private _URL_CONTADOR = `${this.urlBase}/click/contador/`;
  private IP_ADDRESS: string = '';

  constructor(private http: HttpClient) {
    this.getIpAddress().subscribe();
  }

  public altaClave(clave: string, recaptchaToken: string, host: string): Observable<GiveawayParticipacionNominaAltaClave> {
    return new Observable<GiveawayParticipacionNominaAltaClave>((observer) => {
      this.assertIpAddess().subscribe((ip) => {
        const payload = {
          'participante': {
            'clave': clave
          },
          'ip': ip
        };

        this.postJson<GiveawayParticipacionNominaAltaClave>(this._URL_ALTA + recaptchaToken + '/' + host, payload).subscribe((response) => {
          observer.next(response);
        },
          (error) => {
            this.errorHandler(observer, error);
          },
          () => {
            observer.complete();
          });

      }, (error => {
        observer.error(new GiveawayParticipacionNominaError('', 'get-ip', 'ERROR_REQUEST', 'cant_get_ip_address_from_service', -1));

      }), () => {
        observer.complete();
      });
    });
  }

  public contador(ano: string, mes: number, recaptchaToken: string, host: string): Observable<GiveawayParticipacionNominaContador> {
    return new Observable<GiveawayParticipacionNominaContador>((observer) => {
      const payload = {
        'participante': {},
        'annio': ano,
        'mes': mes,
      };

      this.postJson<GiveawayParticipacionNominaContador>(this._URL_CONTADOR + recaptchaToken + '/' + host,
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


  public contadorGiveaway(id: string, recaptchaToken: string, host: string): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = {
      headers: headers,
    };

    return this.http.post<GiveawayParticipacionNominaContador>(this.urlBase + '/click-giveaway/contador/' + recaptchaToken + '/' + host,
     id, options);
  }

  public numeroParticipacionesGiveaway(id: string, recaptchaToken: string, host: string): Observable<any> {

    return new Observable<any>((observer) => {

      const payload = {
        'participante': {
          'clave': id
        }
      };

      this.postJson<any>(this.urlBase + '/click-giveaway/numero-participaciones/reto-hey/' + recaptchaToken + '/' + host, payload)
      .subscribe((response) => {
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

  public altaMultiplesClaveGiveaway(clave: string, recaptchaToken: string, host: string): Observable<any> {
    return new Observable<any>((observer) => {
      this.assertIpAddess().subscribe((ip) => {
        const payload = {
          'participante': {
            'clave': clave
          },
          'ip': ip
        };

        this.postJson<any>(this.urlBase + '/click-giveaway/altaclave/reto-hey/' + recaptchaToken + '/' + host,
        payload).subscribe((response) => {
          observer.next(response);
        },
          (error) => {
            this.errorHandler(observer, error);
          },
          () => {
            observer.complete();
          });

      }, (error => {
        observer.error(new GiveawayParticipacionNominaError('', 'get-ip', 'ERROR_REQUEST', 'cant_get_ip_address_from_service', -1));

      }), () => {
        observer.complete();
      });
    });
  }

  public altaClaveGiveaway(clave: string, recaptchaToken: string, host: string): Observable<GiveawayParticipacionNominaAltaClave> {
    return new Observable<GiveawayParticipacionNominaAltaClave>((observer) => {
      this.assertIpAddess().subscribe((ip) => {
        const payload = {
          'participante': {
            'clave': clave
          },
          'ip': ip
        };

        // tslint:disable-next-line:max-line-length
        this.postJson<GiveawayParticipacionNominaAltaClave>(this.urlBase + '/click-giveaway/altaclave/' + recaptchaToken + '/' + host, payload).subscribe((response) => {
          observer.next(response);
        },
          (error) => {
            this.errorHandler(observer, error);
          },
          () => {
            observer.complete();
          });

      }, (error => {
        observer.error(new GiveawayParticipacionNominaError('', 'get-ip', 'ERROR_REQUEST', 'cant_get_ip_address_from_service', -1));

      }), () => {
        observer.complete();
      });
    });
  }

  private postJson<T>(url: string, payload?: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
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
      const errorResponse = new GiveawayParticipacionNominaError;
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
