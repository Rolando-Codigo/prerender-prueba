import { Component, OnInit } from '@angular/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-terminal-inteligente',
  templateUrl: './terminal-inteligente.component.html',
  styleUrls: ['./terminal-inteligente.component.css']
})
export class TerminalInteligenteComponent implements OnInit {

  environment = environment;

  constructor(private metaTagsService : MetaTagsService){}

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Folleto Informativo | Terminal Inteligente Hey');
    this.metaTagsService.setMetaDescription('Conoce a detalle los requisitos, beneficios y comisiones de nuestra Terminal Inteligente Hey');
  }
}
