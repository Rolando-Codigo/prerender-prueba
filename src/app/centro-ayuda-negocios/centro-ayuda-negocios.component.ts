import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { MetaTagsService } from '../services/meta-tags.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-centro-ayuda-negocios',
  templateUrl: './centro-ayuda-negocios.component.html'
})
export class CentroAyudaNegociosComponent implements OnInit {

  environment = environment;
  public searchForm = new FormControl('', [
    Validators.minLength(2),
  ]);

  public searchTerm = '';

  constructor(private router: Router,private metaTagsService : MetaTagsService) { }

  ngOnInit() {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('¡Error 404!');
    this.metaTagsService.setMetaDescription('Lo sentimos la página que buscas no esta disponible, verifica bien la descripción que buscas.');
  }

  public submitSearch() {
    if (!this.isValidSearchForm) {
      return;
    }

    this.searchTerm = this.searchForm.value;
    this.router.navigate(['/centro-ayuda-negocios/busqueda', this.searchTerm]);

  }

  public get isValidSearchForm(): boolean {
    return this.searchForm.valid && this.searchForm.value.length > 0;
  }

}
