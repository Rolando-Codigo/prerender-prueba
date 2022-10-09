import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { KnowledgeCentroAyuda } from '../util/knowledge-centro-ayuda';
import { KnowledgeCentroAyudaResponse } from '../util/knowledge-centro-ayuda-response';

@Injectable({
  providedIn: 'root'
})
export class KnowledgeCentroAyudaService {

  // TODO: URL BASE DEL SERVICIO DE SALESFORCE KNOWLEDGE
  // private _URL = 'https://us-central1-banregiolabs-whatsapp-250421.cloudfunctions.net/SalesforceKnowledgeSearch';

  // private _URL = 'https://us-central1-adquirencia-domicilio.cloudfunctions.net/SalesforceKnowledgeSearch';

  // private _URL = '/us-central-knowledge';
  private _URL = 'https://us-central1-banregiolabs-qa.cloudfunctions.net/SalesforceKnowledgeSearch';

  constructor(private http: HttpClient) { }

  private sendRequest<T>(parameters: HttpParams = null) {
    const options = {};
    if (parameters != null) {
      options['params'] = parameters;
    }
    return this.http.get<T>(this._URL, options).pipe(catchError(this.handleError));
  }

  public search(term: string, page: number = 1, on: string= KnowledgeCentroAyuda.ON_YOU ) {
    const params: HttpParams = new HttpParams()
      .set(KnowledgeCentroAyuda.SEARCH, term)
      .set(KnowledgeCentroAyuda.PAGE, page.toString(10))
      .set(KnowledgeCentroAyuda.ON, on);
    return this.sendRequest<KnowledgeCentroAyudaResponse<KnowledgeCentroAyuda[]>>(params);
  }

  public getById(id: string) {
    const params: HttpParams = new HttpParams()
      .set(KnowledgeCentroAyuda.ID, id);

    return this.sendRequest<KnowledgeCentroAyudaResponse<KnowledgeCentroAyuda>>(params);
  }

  public getFAQs(category: string, page: number = 1, on: string = KnowledgeCentroAyuda.ON_YOU) {
    const params: HttpParams = new HttpParams()
      .set(KnowledgeCentroAyuda.ON, on)
      .set(KnowledgeCentroAyuda.FAQS, category)
      .set(KnowledgeCentroAyuda.PAGE, page.toString(10));
    return this.sendRequest<KnowledgeCentroAyudaResponse<KnowledgeCentroAyuda[]>>(params);
  }

  /**
   * @param error HttpErrorResponse
   */
  private handleError = (error: HttpErrorResponse) => {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.log(`Backend returned code ${error.status}, ` + `body was:`, error.error);
    }
    // Return an observable with a user-facing error message.
    const response = error.error;
    response.status_code = error.status;
    return throwError(response);
  }
}
