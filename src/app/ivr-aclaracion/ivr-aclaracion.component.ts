import { Component } from '@angular/core';
import {AclaracionIvr} from '../aclaracion-ivr';
import {IvrService} from '../ivr.service';
import {ImagenIvr} from '../imagen-ivr';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-ivr-aclaracion',
  templateUrl: './ivr-aclaracion.component.html'
  // styleUrls: ['./ivr-aclaracion.component.css']
})
export class IvrAclaracionComponent {
  public aclaracion: AclaracionIvr = new AclaracionIvr();

  public IDENTIFIER_VALUES: [string, string];

  public IDENTIFIER_VALUES_TEXT = {
    'card': 'Número de Tarjeta',
    'account_number': 'Número de Cuenta'
  };

  public REASON_VALUES = [
    '1.- Cliente no reconoce el cargo en comercio.',
    '2.- Cliente no recibio la mercancia o servicio.',
    '3.- Cliente menciona haber cancelado el servicio/mercancia.',
    '4.- Cliente argumenta que los servicios o bienes estaban defectuosos o la mercancia no era como esperaba.',
    '5.- Cliente argumenta haber devuelto la mercancia.',
    '6.- Comercio solicita aclaración por recompensas.',
    '7.- Cliente acuido a retirar en cajero Banregio o de otro Banco y no entrego efectivo total o entrego parcial.',
    '8.- Cliente no reconcer retiro en ATM.',
    '9.- Cliente realizo el pago al comercio por otro medio.',
    '10.- Cliente no ve reflejado un pago a su TDC o TDD Hey, realizado desde otro banco, en sucursal o corresponsable.',
    '11.- Cliente realizo un pago de servicio a tarjeta de otro banco.',
    '12.- Cliente realizo un pago por error a su TDC cancelada o al otra TDC Hey/Banregio. Solicita reverso del pago.',
    '13.- Clienre no reconoce intereses/comision por reposicion/pago tardio.',
    '14.- Cliente no reconoce la tarjeta de crédito o débito.',
    '15.- Otro tipo de aclaración.',
  ];

  public VALID_MIMETYPES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
  ];

  public identifier: string;
  public busy = false;

  constructor(private ivrService: IvrService) {
    this.identifier = this.aclaracion.CARD;
    this.IDENTIFIER_VALUES = [
      this.aclaracion.CARD,
      this.aclaracion.ACCOUNT_NUMBER
    ];
  }


  public fileChange = (event, type) => {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];

      const reader = new FileReader();
      reader.onload = ((context, loadedType) => {
        return (e) => {
          const base64 = e.target.result.split(',');
          const base64Head = base64[0];
          const base64Mimetype = base64Head.split(':')[1].split(';')[0];
          const base64Extension = base64Mimetype.split('/')[1];
          let valid = false;
          for (let i = 0; i < this.VALID_MIMETYPES.length; i++) {
            if (this.VALID_MIMETYPES[i] === base64Mimetype) {
              valid = true;
              break;
            }
          }

          if (!valid) {
            alert('Invalid file type');
            return;
          }

          switch (loadedType) {
            case this.aclaracion.INE_FRONT:
              context.aclaracion.ineFront.payload = base64[1];
              context.aclaracion.ineFront.base64Head = base64Head;
              context.aclaracion.ineFront.mimetype = base64Mimetype;
              context.aclaracion.ineFront.extension = base64Extension;
              break;
            case this.aclaracion.INE_BACK:
              context.aclaracion.ineBack.payload = base64[1];
              context.aclaracion.ineBack.base64Head = base64Head;
              context.aclaracion.ineBack.mimetype = base64Mimetype;
              context.aclaracion.ineBack.extension = base64Extension;
              break;
            case this.aclaracion.CARD_FRONT:
              context.aclaracion.cardFront.payload = base64[1];
              context.aclaracion.cardFront.base64Head = base64Head;
              context.aclaracion.cardFront.mimetype = base64Mimetype;
              context.aclaracion.cardFront.extension = base64Extension;
              break;
            case this.aclaracion.CARD_BACK:
              context.aclaracion.cardBack.payload = base64[1];
              context.aclaracion.cardBack.base64Head = base64Head;
              context.aclaracion.cardBack.mimetype = base64Mimetype;
              context.aclaracion.cardBack.extension = base64Extension;
              break;
            case this.aclaracion.VOUCHER:
              context.aclaracion.voucher.payload = base64[1];
              context.aclaracion.voucher.base64Head = base64Head;
              context.aclaracion.voucher.mimetype = base64Mimetype;
              context.aclaracion.voucher.extension = base64Extension;
              break;
          }
        };
      })(this, type);
      reader.readAsDataURL(file);
    }
  }

  public submitForm(event) {
    if (this.busy) {
      return;
    }
    this.busy = true;

    this.sendIneFront();
  }

  public sendIneFront() {
    if (!this.aclaracion.ineFront.reference && this.aclaracion.ineFront.payload) {
      this.ivrService.sendImagen(this.aclaracion.ineFront).subscribe(
        next => {
          if (!next.data || !next.data.reference) {
            this.busy = false;
            return;
          }
          this.aclaracion.ineFront.reference = next.data.reference;
          this.sendIneBack();
        },
        error => {
          this.busy = false;
        },
      );
      return;
    }

    this.sendIneBack();
  }

  public sendIneBack() {
    if (!this.aclaracion.ineBack.reference && this.aclaracion.ineBack.payload) {
      this.ivrService.sendImagen(this.aclaracion.ineBack).subscribe(
        next => {
          if (!next.data || !next.data.reference) {
            this.busy = false;
            return;
          }
          this.aclaracion.ineBack.reference = next.data.reference;
          this.sendCardFront();
        },
        error => {
          this.busy = false;
        },
      );
      return;
    }

    this.sendCardFront();
  }

  public sendCardFront() {
    if (!this.aclaracion.cardFront.reference && this.aclaracion.cardFront.payload) {
      this.ivrService.sendImagen(this.aclaracion.cardFront).subscribe(
        next => {
          if (!next.data || !next.data.reference) {
            this.busy = false;
            return;
          }
          this.aclaracion.cardFront.reference = next.data.reference;
          this.sendCardBack();
        },
        error => {
          this.busy = false;
        },
      );
      return;
    }

    this.sendCardBack();
  }

  public sendCardBack() {
    if (!this.aclaracion.cardBack.reference && this.aclaracion.cardBack.payload) {
      this.ivrService.sendImagen(this.aclaracion.cardBack).subscribe(
        next => {
          if (!next.data || !next.data.reference) {
            this.busy = false;
            return;
          }
          this.aclaracion.cardBack.reference = next.data.reference;
          this.sendVoucher();
        },
        error => {
          this.busy = false;
        },
      );
      return;
    }

    this.sendVoucher();
  }

  public sendVoucher() {
    if (!this.aclaracion.voucher.reference && this.aclaracion.voucher.payload) {
      this.ivrService.sendImagen(this.aclaracion.voucher).subscribe(
        next => {
          if (!next.data || !next.data.reference) {
            this.busy = false;
            return;
          }
          this.aclaracion.voucher.reference = next.data.reference;
          this.sendAclaracion();
        },
        error => {
          this.busy = false;
        },
      );
      return;
    }

    this.sendAclaracion();
  }

  public sendAclaracion() {
    // this.ivrService.sendAclaracion(this.aclaracion).subscribe(
    //   next => {
    //     this.aclaracion.clear();
    //     this.busy = false;
    //   },
    //   error => {
    //     this.busy = false;
    //   });
  }

}
