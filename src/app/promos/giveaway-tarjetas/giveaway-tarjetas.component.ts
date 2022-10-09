import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GiveawayTarjetasService } from 'src/app/services/giveaway-tarjetas.service';
import { MatDialog } from '@angular/material/dialog';
import { RegistroComponent } from './modal/registro/registro.component';
import { ErrorComponent } from './modal/error/error.component';
import { PromocionalGeneralComponent } from 'src/app/promos/promocional-general';
import { ConfirmModalService } from 'src/app/components/confirm-modal/confirm-modal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-giveaway-tarjetas',
  templateUrl: './giveaway-tarjetas.component.html',
  styleUrls: ['./giveaway-tarjetas.component.css']
})
export class GiveawayTarjetasComponent extends PromocionalGeneralComponent implements OnInit {

  archivoTarjeta: Documento;
  tarjeta: Tarjetas;
  tarjetaModel: TarjetaModelo;
  estatusArchivo: Boolean;
  extension: string;
  estatusPesoArchivo: Boolean;
  error_mensaje: string;

  form: FormGroup;
  file: File;

  constructor(
    formBuilder: FormBuilder,
    confirmModalService: ConfirmModalService,
    route: ActivatedRoute,
    private giveawayTarjetasService: GiveawayTarjetasService,
    private dialog: MatDialog,
    @Inject(PLATFORM_ID) public platformId: Object
  ) {
    super(formBuilder, confirmModalService, route, platformId);
  }

  ngOnInit(): void {
    this.estatusArchivo = false;
    this.estatusPesoArchivo = false;
    this.form = this.formBuilder.group({
      correoParticipante: [null, [Validators.required, Validators.email]],
      nombreCompleto: [null, [Validators.required]],
      estatusTC: [null, [Validators.required]],
    });

    this.archivoTarjeta = { archivoBase64: '', mimeType: '', nombreArchivo: '' };
    this.tarjeta = {
      correo: '',
      estatus: 0,
      fecha: null,
      formato: '',
      id: null,
      idRango: 0,
      ip: null,
      nombreCompleto: '',
      urlImagen: ''
    };

    this.tarjetaModel = {
      documento: { archivoBase64: '', mimeType: '', nombreArchivo: '' },
      tarjetas: {
        correo: '',
        estatus: 0,
        fecha: null,
        formato: '',
        id: null,
        idRango: 0,
        ip: null,
        nombreCompleto: '',
        urlImagen: ''
      },
      layout: ''
    };
  }

  onChange(event) {
    let mime;
    let nombre;
    let size;
    this.file = event.target.files[0];
    size = event.target.files[0].size;
    if (size <= 15000000) {
      this.readBase64(this.file)
        .then((data) => {
          nombre = this.file.name;
          nombre = nombre.split('.');
          data = data.split(';');
          mime = data[0];
          data = data[1].split(',');
          mime = mime.split(':');
          this.extension = mime[1].split('/');
          this.extension = this.extension[1];
          if (this.extension === 'png' || this.extension === 'jpg' || this.extension === 'pdf') {
            this.archivoTarjeta = {
              archivoBase64: data[1],
              mimeType: mime[1],
              nombreArchivo: nombre[0]
            };
          } else {
            this.file = null;
            this.estatusArchivo = false;
            this.estatusPesoArchivo = true;
            this.error_mensaje = 'La extension del archivo no es valida';
          }
        });
      this.estatusArchivo = true;
      this.estatusPesoArchivo = false;
    } else {
      this.file = null;
      this.estatusArchivo = false;
      this.estatusPesoArchivo = true;
      this.error_mensaje = 'El archivo no puede pesar mas de 15 MB';
    }
  }

  private readBase64(file): Promise<any> {
    const reader = new FileReader();
    const future = new Promise((resolve, reject) => {
      reader.addEventListener('load', () => {
        resolve(reader.result);
      }, false);
      reader.addEventListener('error', (event) => {
        reject(event);
      }, false);

      reader.readAsDataURL(file);
    });
    return future;
  }

  async submitRequest(recaptcha?: string) {
    const validadCaptcha = await this.validarCaptcha('ALTA', recaptcha);
    if (validadCaptcha) {
      let extencion;
      this.busy = true;
      const fecha = new Date();
      fecha.toISOString();


      let estatus;
      if (this.form.value.estatusTC === true) {
        estatus = 1;
      }

      extencion = this.archivoTarjeta['mimeType'].split('/');

      this.tarjeta = {
        correo: this.form.value.correoParticipante.toLowerCase(),
        estatus: estatus,
        fecha: fecha,
        formato: this.archivoTarjeta['mimeType'],
        id: null,
        idRango: 0,
        ip: null,
        nombreCompleto: this.form.value.nombreCompleto,
        urlImagen: 'portal/tarjetas/' + this.archivoTarjeta['nombreArchivo'] + '.' + extencion[1]
      };

      this.tarjetaModel.documento = this.archivoTarjeta;
      this.tarjetaModel.tarjetas = this.tarjeta;
      this.tarjetaModel.layout = 'tarjetas_promocional';
      this.tarjetaModel.captcha = recaptcha;
      this.tarjetaModel.host = this.host;

      this.giveawayTarjetasService.altaTarjeta(this.tarjetaModel).subscribe(response => {
        const dialogRef = this.dialog.open(RegistroComponent, { width: '400px', height: '400px' });
        dialogRef.afterClosed();
        this.busy = false;
        this.form.reset();
        this.file = null;
        this.estatusArchivo = false;
      }, (error) => {
        this.busy = false;
        this.form.reset();
        const dialogRef = this.dialog.open(ErrorComponent, { width: '400px' });
        dialogRef.afterClosed();
        this.file = null;
        this.estatusArchivo = false;
      });
    }
  }

  onDelete() {
    this.estatusArchivo = false;
    this.file = null;
    this.archivoTarjeta = null;
  }

}

export interface TarjetaModelo {
  documento: Documento;
  tarjetas: Tarjetas;
  layout: string;
  captcha?: string;
  host?: string;
}

export interface Documento {
  archivoBase64: string;
  mimeType: string;
  nombreArchivo: string;
}

export interface Tarjetas {
  correo: string;
  estatus: number;
  fecha: Date;
  formato: string;
  id: number;
  idRango: number;
  ip: string;
  nombreCompleto: string;
  urlImagen: string;
}
