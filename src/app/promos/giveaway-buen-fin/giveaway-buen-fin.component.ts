import { Component} from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-giveaway-buen-fin',
  templateUrl: './giveaway-buen-fin.component.html',
  styleUrls: ['./giveaway-buen-fin.component.css']
})
export class GiveawayBuenFinComponent {

  environment = environment;

}
