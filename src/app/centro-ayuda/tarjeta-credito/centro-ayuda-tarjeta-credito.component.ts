import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { environment } from '../../../environments/environment';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-centro-ayuda',
  templateUrl: './centro-ayuda-tarjeta-credito.component.html'
})
export class CentroAyudaTarjetaCreditoComponent implements OnInit {

  environment = environment;
  public searchForm = new FormControl('', [
    Validators.minLength(2),
  ]);

  public searchTerm = '';

  constructor(private router: Router, private metaTagsService: MetaTagsService) { }

  ngOnInit() {
    this.setMetaTags();
  }

  public submitSearch() {
    if (!this.isValidSearchForm) {
      return;
    }

    this.searchTerm = this.searchForm.value;
    this.router.navigate(['/centro-ayuda/busqueda', this.searchTerm]);

  }

  public get isValidSearchForm(): boolean {
    return this.searchForm.valid && this.searchForm.value.length > 0;
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Conoce todo sobre tu Tarjeta de Crédito');
    this.metaTagsService.setMetaDescription('Conoce como manejar tu Tarjeta de Crédito Hey directamente en tu app Hey Banco. Aprende la diferencia entre deuda al corte, deuda actual y crédito disponible.');
  }

}
