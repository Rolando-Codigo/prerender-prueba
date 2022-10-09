import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {KnowledgeCentroAyuda} from '../knowledge-centro-ayuda';
import {KnowledgeCentroAyudaService} from '../knowledge-centro-ayuda.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-centro-ayuda-resultado',
  templateUrl: './centro-ayuda-resultado.component.html'
})
export class CentroAyudaResultadoComponent implements OnInit, OnDestroy {
  public searchForm = new FormControl('', [
    Validators.minLength(2),
  ]);

  environment = environment;
  private parameterSubscription: any;

  public model: KnowledgeCentroAyuda;
  public id: string = null;
  public busy = false;

  public MODEL = KnowledgeCentroAyuda;

  constructor(private knowledgeCentroAyudaService: KnowledgeCentroAyudaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.parameterSubscription = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.doGetById(this.id);
    });
  }

  ngOnDestroy() {
    this.parameterSubscription.unsubscribe();
  }

  public doGetById(id: string) {
    if (this.busy) {
      return;
    }
    this.busy = true;

    this.knowledgeCentroAyudaService.getById(id).subscribe(
      next => {
        this.busy = false;
        const dataText: KnowledgeCentroAyuda = next.data;
        dataText.answer = dataText.answer.split('banregio--c.na122.content.force.com/').join('centrodeatencion.force.com/CentroDeAyudaHeyBanco/');
        this.model = next.data;
      },
      error => {
        if (error.status_code === 404) {
          // TODO: QUE SUCEDE CUANDO NO ENCUENTRA EL ARTICULO
        }
        this.busy = false;
      },
    );
  }

}
