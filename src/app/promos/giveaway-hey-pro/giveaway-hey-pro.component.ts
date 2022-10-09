import { Component, OnInit} from '@angular/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-giveaway-hey-pro',
  templateUrl: './giveaway-hey-pro.component.html',
  styleUrls: ['./giveaway-hey-pro.component.css']
})
export class GiveawayHeyProComponent implements OnInit {
  environment = environment;
  constructor(
    private metaTagsService: MetaTagsService
    ) { }

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Increíbles beneficios al ser cliente Hey Pro');
    this.metaTagsService.setMetaDescription('¡Recompensamos el uso de tu cuenta! Conviértete en Hey Pro y recibe MSI en tus compras, acceso a giveaways y ventajas al contratar productos.');
  }

}
