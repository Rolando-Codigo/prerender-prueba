import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalesforceApiService {
  // private SERVER_URL = '/us-central';
  private SERVER_URL = 'https://us-central1-adquirencia-domicilio.cloudfunctions.net/SalesforceKnowledgeSearch';
  // private SERVER_URL = "https://us-central1-banregiolabs-qa.cloudfunctions.net/SalesforceKnowledgeSearch";

  constructor(private httpClient: HttpClient) { }

  public searchQuery(query: string) {
    const options = { params: new HttpParams().set('q', query) };
    return this.httpClient.get(`${this.SERVER_URL}/SalesforceKnowledgeSearch`, options);
  }

  public searchSlug(slug: string) {
    const options = { params: new HttpParams().set('q', '').set('k', slug) };
    return this.httpClient.get(`${this.SERVER_URL}/SalesforceKnowledgeSearch`, options);
  }

  public searchCategory(category: string) {
    const options = { params: new HttpParams().set('q', '').set('c', category) };
    return this.httpClient.get(`${this.SERVER_URL}/SalesforceKnowledgeSearch`, options);
  }
}
