import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-ruleta-widget',
  templateUrl: './ruleta-widget.component.html'
})
export class RuletaWidgetComponent {

  @Input() op = 'stop';

}
