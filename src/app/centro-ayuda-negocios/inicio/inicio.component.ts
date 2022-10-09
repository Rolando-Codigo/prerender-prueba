import { Component, OnInit } from '@angular/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioCentroAyudaNegociosComponent implements OnInit {

  environment = environment;
  constructor(private metaTagsService : MetaTagsService) { }

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Centro de ayuda | Hey Negocios 	Centro de ayuda | Hey Negocios');
    this.metaTagsService.setMetaDescription('Centro de Ayuda para tus Terminales Hey. Solicita rollos, mantenimiento, publicidad y capacitación para un mejor manejo de tus terminales.');
  }

}
