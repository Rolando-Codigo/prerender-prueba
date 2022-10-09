import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {KnowledgeCentroAyuda} from '../knowledge-centro-ayuda';
import {KnowledgeCentroAyudaService} from '../knowledge-centro-ayuda.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { MetaTagsService } from '../services/meta-tags.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-centro-ayuda-resultados',
  templateUrl: './centro-ayuda-resultados.component.html'
})
export class CentroAyudaResultadosComponent implements OnInit, OnDestroy {

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

  categorias = [
    {
      nombre: 'Cuentas Débito',
      valor: 'cuentas debito'
    },
    {
      nombre: 'Créditos Crédito',
      valor: 'creditos credito'
    },
    {
      nombre: 'Recompensas',
      valor: 'recompensas'
    },
    {
      nombre: 'Ahorro',
      valor: 'ahorro'
    },
    {
      nombre: 'Inversiones',
      valor: 'inversiones'
    },
    {
      nombre: 'Seguros',
      valor: 'seguros'
    },
    {
      nombre: 'Portabilidad de Nómina',
      valor: 'portabilidad de nomina'
    },
    {
      nombre: 'Apple Pay',
      valor: 'apple pay'
    },
    {
      nombre: 'Soluciones de Cobro',
      valor: 'soluciones de cobro'
    },
    {
      nombre: 'Banca Web y App',
      valor: 'banca web y app'
    },
    {
      nombre: 'Hey Pro',
      valor: 'hey pro'
    },
    {
      nombre: 'Promociones y Giveaways',
      valor: 'promociones y giveaways'
    },
  ];

  constructor(private knowledgeCentroAyudaService: KnowledgeCentroAyudaService, private route: ActivatedRoute,
              private router: Router,
              private metaTagsService : MetaTagsService) { }

  ngOnInit() {
    this.categorias.sort( (a, b) => a.nombre < b.nombre ? -1 : 1 );
    this.parameterSubscription = this.route.params.subscribe(params => {
      this.reset();
      this.searchTerm = params['search'];
      this.searchForm.setValue(this.searchTerm);
      this.doSearch(this.searchTerm, this.page);
      this.setMetaTags();
    });
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Centro de Ayuda | Categorías de búsqueda ');
    this.metaTagsService.setMetaDescription('Filtra tu búsqueda de productos y servicios bancarios aquí. Ahorro, Banca Web y App, Hey Pro, Inversiones, Soluciones de Cobro. Portabilidad de Nómina.');
  }

  ngOnDestroy() {
    this.parameterSubscription.unsubscribe();
  }

  public submitSearch() {
    if (!this.isValidSearchForm) {
      return;
    }
    this.searchTerm = this.searchForm.value;
    this.router.navigate(['/centro-ayuda/busqueda', this.searchTerm]);

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

    this.knowledgeCentroAyudaService.search(term, page).subscribe(
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
