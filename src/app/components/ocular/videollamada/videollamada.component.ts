import { Component, OnDestroy } from '@angular/core';
import { OcularService } from 'src/app/services/ocular.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-videollamada',
  templateUrl: './videollamada.component.html',
  styleUrls: ['./videollamada.component.css']
})
export class VideollamadaComponent implements OnDestroy {

  constructor(private ocular: OcularService) { 
    this.ocular.Cargar();
  }
 

  ngOnDestroy(): void {
    this.ocular.eliminar();
  }

}
