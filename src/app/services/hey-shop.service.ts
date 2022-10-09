import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GiveawayParticipacionAhorroError } from '../models/giveaway/giveaway-participacion-ahorro-error';
import { ProductoInterface } from '../personas/shop/shop.component';

@Injectable({
  providedIn: 'root'
})
export class HeyShopService {
  private urlBase = 'https://heyshop.com/wp-json/wc/v3/wcmp/';
  // // PROD
  // private _URL = 'https://heyshop.com/wp-json/wc/v3/wcmp/portalhey';
  // // QA
  // private _URL = 'https://marketplace-qa.brlabsdev.com/wp-json/wc/v3/wcmp/portalhey';
  constructor(private http: HttpClient) { }

  getApiShop(): Observable<Array<ProductoInterface>> {
    return new Observable<Array<ProductoInterface>>((observer) => {
      this.http.get(this.urlBase).subscribe( (response: Array<ProductoInterface>) => {
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
