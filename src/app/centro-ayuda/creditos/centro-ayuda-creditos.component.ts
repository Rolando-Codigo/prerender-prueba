import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-centro-ayuda',
  templateUrl: './centro-ayuda-creditos.component.html'
})
export class CentroAyudaCreditosComponent {

  environment = environment;
  public searchForm = new FormControl('', [
    Validators.minLength(2),
  ]);

  public searchTerm = '';

  constructor(private router: Router) { }

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

}
