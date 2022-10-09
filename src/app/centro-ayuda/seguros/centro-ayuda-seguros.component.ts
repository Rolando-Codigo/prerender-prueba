import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { MetaTagsService } from 'src/app/services/meta-tags.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-centro-ayuda',
  templateUrl: './centro-ayuda-seguros.component.html'
})
export class CentroAyudaSegurosComponent implements OnInit {

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
    this.metaTagsService.setTitle('Conoce todo sobre tus Seguros Hey');
    this.metaTagsService.setMetaDescription('Conoce todo sobre Seguros de Auto Hey, Seguro de Celular, Ayuda Hospitalaria y Consulta Virtual. Accede a tutoriales para saber como usarlos desde tu app.');
  }

}
