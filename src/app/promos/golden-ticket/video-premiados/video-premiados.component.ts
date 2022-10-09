import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-video-premiados',
  templateUrl: './video-premiados.component.html',
  styleUrls: ['./video-premiados.component.css']
})
export class VideoPremiadosComponent {

  @Input()
  videoUrl;

  constructor() { }


}
