import { Component, OnInit } from '@angular/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-cuenta-numero',
  templateUrl: './proteccion.component.html',
  styleUrls: ['./proteccion.component.css']
})
export class CentroAyudaProteccionComponent implements OnInit {

  environment = environment;
  constructor(private metaTagsService : MetaTagsService) { }

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Seguro Hey |  ¿Qué es Protección Hey y cómo la activo?');
    this.metaTagsService.setMetaDescription('Conoce nuestra Protección Hey y aprende a activarla desde nuestra App Hey Banco aquí. ');
  }

}
