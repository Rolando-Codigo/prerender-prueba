import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-datos-afiliacion',
  templateUrl: './datos-afiliacion.component.html',
  styleUrls: ['./datos-afiliacion.component.css'],
  encapsulation : ViewEncapsulation.None,
})
export class DatosAfiliacionComponent implements OnInit {

  @Input() datosAfiliacionForm: FormGroup;
  @Output()
  form = new EventEmitter<FormGroup>();

  constructor(
    private _formBuilder: FormBuilder,
    ) { }

  ngOnInit(): void {

    this.datosAfiliacionForm = this._formBuilder.group({
      numeroAfiliacion: [null, [Validators.required, Validators.maxLength(7) ]],
      correo: [null, [Validators.required, Validators.email]],
      razonSocial: [null, Validators.required],
    });

    setTimeout(() => {
      this.form.emit(this.datosAfiliacionForm);
    });
  }

  kUpNoAfiliado() {
    let nA = this.datosAfiliacionForm.value.numeroAfiliacion;
    if ( nA != null) {
      nA = this.pad(nA, 7);
      console.log(nA);
      this.datosAfiliacionForm.patchValue({
        numeroAfiliacion: nA
      });
    }
  }

   pad(num, size) {
    num = num.toString();
    while (num.length < size) { num = '0' + num; }
    num = num.toString().slice(-7);
    return num;
  }
}
