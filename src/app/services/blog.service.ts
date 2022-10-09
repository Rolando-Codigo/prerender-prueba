import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArticuloInterface } from '../models/articulos.model';
import { CategoriasInterface } from '../models/categorias.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  // url = 'https://strapi.heybanco.com';
  // url = '/conten-media';
  url = 'https://contentmedia.hey.inc';

  paginateDefault = 25;

  idTemp$: BehaviorSubject<number>;

  constructor(private http: HttpClient) {
  }

  getCategorias() {
    return this.http.get<Array<CategoriasInterface>>(`${this.url}/categorias` );
  }

  getArticuloFind(clave: string) {
    return this.http.get<Array<ArticuloInterface>>(`${this.url}/articulos?id=${clave}` );
  }

  async getUrl(image: string) {
    return await this.http.get<Array<ArticuloInterface>>(`${this.url}${image}` ).toPromise();
  }

  getArtiuclos(start = 0) {
    return this.http.get<Array<ArticuloInterface>>(`${this.url}/articulos?_start=${start}&_limit=${start + this.paginateDefault}&_sort=fecha:DESC`);
  }

  getArtiuclosByCategoria(categoria: string, start = 0) {
    return this.http.get<Array<ArticuloInterface>>(`${this.url}/articulos?categoria=${categoria}&_start=${start}&_limit=${start + this.paginateDefault}&_sort=fecha:DESC`);
  }

}
