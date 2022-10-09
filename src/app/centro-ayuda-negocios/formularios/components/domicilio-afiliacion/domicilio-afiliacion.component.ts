import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatosGeograficosService } from 'src/app/services/datos-geograficos.service';
import { Estatus } from 'src/app/models/estatus';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-domicilio-afiliacion',
  templateUrl: './domicilio-afiliacion.component.html',
  styleUrls: ['./domicilio-afiliacion.component.css']
})
export class DomicilioAfiliacionComponent implements OnInit {

  @Input() domicilioAfiliacionForm: FormGroup;
  @Output()
  form = new EventEmitter<FormGroup>();

  estados = [];
  muncipios = [];
  colonias = [];

  constructor(
    private _formBuilder: FormBuilder,
    private _datosGeograficosService: DatosGeograficosService,
    ) { }

  ngOnInit(): void {

    this.domicilioAfiliacionForm = this._formBuilder.group({
      calle: [null, Validators.required],
      noInterior: [null],
      noExterior: [null, Validators.required ],
      cp: [null, Validators.required],
      estado: [null, Validators.required],
      ciudad: [null, Validators.required],
      colonia: [null, Validators.required],
    });

    setTimeout(() => {
      this.form.emit(this.domicilioAfiliacionForm);
    });
  }

  cargarComboEstados() {
    this._datosGeograficosService.consultaEstados().subscribe(estados => {
      if (estados.statuscode === Estatus.STATUS_EXITOSO) {
        if (estados.resultset) {
          estados.resultset.forEach(resultado => {
            this.estados.push({ key: resultado.numero, value: resultado.nombre });
          });
          this.estados.sort( (a, b) => a.value < b.value ? -1 : 1 );
        }
      }
    }, (error) => {
    });
  }

  changeEstado() {
    const form = this.domicilioAfiliacionForm.value;
    this.muncipios = [];

    // buscar los municipios del estado
    this._datosGeograficosService.consultaMunicipios(form.estado).subscribe(municipiosResult => {
      if (municipiosResult.statuscode === Estatus.STATUS_EXITOSO) {
        if (municipiosResult.resultset) {
          municipiosResult.resultset.forEach(resultado => {
            this.muncipios.push({ key: resultado.numero, value: resultado.nombre });

            // sort municipios
            this.muncipios.sort( (a, b) => a.value < b.value ? -1 : 1 );
          });
        }
      }
    }, (error) => {
    });
  }

  changeCP() {
    const form = this.domicilioAfiliacionForm.value;
    this.colonias = [];

    // buscar los municipios del estado
    this._datosGeograficosService.consultaColonias(form.cp).subscribe(coloniasResult => {
      if (coloniasResult.statuscode === Estatus.STATUS_EXITOSO) {
        if (coloniasResult.resultset) {
          coloniasResult.resultset.colonia.forEach(resultado => {
            this.colonias.push({ key: resultado.numero, value: resultado.nombre });
          });
        }
      }
    }, (error) => {
    });
  }

}
