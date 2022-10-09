import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { MetaTagsService } from '../services/meta-tags.service';

@Component({
  selector: 'hey-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.scss']
})
export class AboutComponent implements OnInit {
  ctaAbout1: string;
  environment = environment;

  constructor(private metaTagsService : MetaTagsService) {}

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('En Hey Banco cambiamos el mundo de las finanzas');
    this.metaTagsService.setMetaDescription('Fortalecemos la relación que tienes con tus finanzas a través de una propuesta extensa de soluciones financieras tecnológicas.');
  }
}
