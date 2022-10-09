import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-info-entrega',
  templateUrl: './info-entrega.component.html',
  styleUrls: ['./info-entrega.component.css']
})
export class InfoEntregaComponent implements OnInit {


  @Input() infoEntregaAfiliacionForm: FormGroup;
  @Output()
  form = new EventEmitter<FormGroup>();

  constructor(
    private _formBuilder: FormBuilder,
    ) { }

  ngOnInit(): void {

    this.infoEntregaAfiliacionForm = this._formBuilder.group({
      tel: [null, Validators.required],
      personaRecibe: [null, Validators.required],
      horarioAtencion: [null, Validators.required],
    });


    setTimeout(() => {
      this.form.emit(this.infoEntregaAfiliacionForm);
    });
  }

}
