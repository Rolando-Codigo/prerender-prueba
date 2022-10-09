import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { MetaTagsService } from 'src/app/services/meta-tags.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-centro-ayuda',
  templateUrl: './centro-ayuda-cuenta.component.html'
})
export class CentroAyudaCuentaComponent implements OnInit {

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
    this.metaTagsService.setTitle('Conoce todo sobre tu Cuenta Hey ');
    this.metaTagsService.setMetaDescription('¿Dudas sobre tu Cuenta Hey? Conoce como abrir una cuenta desde tu App Hey Banco y como hacer uso de ella paso a paso aquí.');
  }

}
