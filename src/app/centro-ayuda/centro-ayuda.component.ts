import { Meta, Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {KnowledgeCentroAyuda} from '../knowledge-centro-ayuda';
import {KnowledgeCentroAyudaService} from '../knowledge-centro-ayuda.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-centro-ayuda',
  templateUrl: './centro-ayuda.component.html'
})
export class CentroAyudaComponent implements OnInit {

  environment = environment;
  public searchForm = new FormControl('', [
    Validators.minLength(2),
  ]);

  public searchTerm = '';

  constructor(private router: Router, private title: Title, private meta: Meta) {
    // environment.assetsUrl = './assets/';
  }

  ngOnInit() {
    this.title.setTitle('Centro de Ayuda | Productos Hey ');
    this.meta.updateTag({ name: 'description', content: 'Aclara todas tus dudas sobre nuestros productos o levanta un reporte o aclaración en nuestro Centro de Servicio.'});
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

}
