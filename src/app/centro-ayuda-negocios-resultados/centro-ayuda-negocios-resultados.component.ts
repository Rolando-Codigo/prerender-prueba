import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {KnowledgeCentroAyuda} from '../knowledge-centro-ayuda';
import {KnowledgeCentroAyudaService} from '../knowledge-centro-ayuda.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-centro-ayuda-negocios-resultados',
  templateUrl: './centro-ayuda-negocios-resultados.component.html'
})
export class CentroAyudaNegociosResultadosComponent implements OnInit, OnDestroy {

  environment = environment;
  public searchForm = new FormControl('', [
    Validators.minLength(2),
  ]);

  private parameterSubscription: any;

  public searchTerm = '';
  public page = 1;
  public more = false;
  public busy = false;
  public results: KnowledgeCentroAyuda[] = [];

  public MODEL = KnowledgeCentroAyuda;

  constructor(private knowledgeCentroAyudaService: KnowledgeCentroAyudaService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.parameterSubscription = this.route.params.subscribe(params => {
      this.reset();
      this.searchTerm = params['search'];
      this.searchForm.setValue(this.searchTerm);
      this.doSearch(this.searchTerm, this.page);
    });
  }

  ngOnDestroy() {
    this.parameterSubscription.unsubscribe();
  }

  public submitSearch() {
    if (!this.isValidSearchForm) {
      return;
    }
    this.searchTerm = this.searchForm.value;
    this.router.navigate(['/centro-ayuda-negocios/busqueda', this.searchTerm]);

    return;

    this.searchTerm = this.searchForm.value;
    this.page = 1;
    this.more = false;
    this.doSearch(this.searchTerm, this.page);
  }

  public submitNextPage() {
    this.doSearch(this.searchTerm, this.page + 1);
  }

  public doSearch(term: string, page: number = 1) {
    if (this.busy) {
      return;
    }
    this.busy = true;

    this.knowledgeCentroAyudaService.search(term, page, 'biz' ).subscribe(
      next => {
        this.busy = false;
        this.page = page;
        this.more = next.data.length > 0;
        this.results = this.results.concat(next.data);
      },
      error => {
        this.busy = false;
      },
    );
  }

  public goToArticle(id: string) {
    this.router.navigate(['/centro-ayuda/articulo', id]);
  }

  public goToSerch(term: string) {
    this.router.navigate(['/centro-ayuda/busqueda', term]);
  }

  public reset() {
    this.searchForm.reset('');
    this.searchTerm = '';
    this.page = 1;
    this.more = false;
    this.results = [];
  }

  public get isValidSearchForm(): boolean {
    return this.searchForm.valid && this.searchForm.value.length > 0;
  }

}
