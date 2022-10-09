import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HelpCenterService {

  private urlCase = 'https://us-central1-adquirencia-domicilio.cloudfunctions.net';
  private urlCaseImage = 'https://us-central1-adquirencia-domicilio.cloudfunctions.net';

  // private urlCase = '/us-central';
  // private urlCaseImage = '/us-central-image';
  // private urlCase = 'https://us-central1-banregiolabs-qa.cloudfunctions.net/CABSendCase';
  // private urlCaseImage = 'https://us-central1-banregiolabs-qa.cloudfunctions.net/CABSendCaseImage';

  constructor(private http: HttpClient) {
    console.log('HelpCenterService');
  }

  sendCaseRollos(datosAfiliado: any, domicilioAfiliado: any, infoEntrega: any, infoSolicitud: any): Observable<any> {

    const cantidad = infoSolicitud.cantidad !== null ?
      infoSolicitud.cantidad === 'Otros' ?
      this.removeSpaces(infoSolicitud.cantidadOther) :
      this.removeSpaces(infoSolicitud.cantidad) : '0';

    const infoRollosString = `Información%20de%20la%20solicitud%0ANúmero%20de%20equipos:%20${this.removeSpaces(infoSolicitud.noEquipos)}%0ACantidad%20de%20rollos:%20${cantidad}%0A%0A`;

    const comments = `${this.afiliadosToString(datosAfiliado)}${infoRollosString}${this.addressToString(domicilioAfiliado)}${this.deliveryInfoToString(infoEntrega)}`;

    const jsonParams = {
      email: this.removeSpaces(datosAfiliado.correo),
      suppliedname: this.removeSpaces(datosAfiliado.razonSocial),
      subject: this.removeSpaces('Solicitud de insumos'), // asunto de la publicidad
      comentarios: comments,
    };

    return this.sendCase(jsonParams);
  }

  sendCasePublicidad(datosAfiliado: any, domicilioAfiliado: any, infoEntrega: any, infoSolicitud: any): Observable<any> {

    const cantidad = infoSolicitud.cantidad !== null ?
      infoSolicitud.cantidad === 'Otros' ?
      this.removeSpaces(infoSolicitud.cantidadOther) :
      this.removeSpaces(infoSolicitud.cantidad) : '0';

    const infoRollosString = `Información%20de%20la%20solicitud%0ATipo%20de%20publicidad%20solicitada:%20${this.removeSpaces(infoSolicitud.tipo)}%0ACantidad%20:%20${cantidad}%0A%0A`;

    const comments = `${this.afiliadosToString(datosAfiliado)}${infoRollosString}${this.addressToString(domicilioAfiliado)}${this.deliveryInfoToString(infoEntrega)}`;

    const jsonParams = {
      email: this.removeSpaces(datosAfiliado.correo),
      suppliedname: this.removeSpaces(datosAfiliado.razonSocial),
      subject: this.removeSpaces('Solicitud de Publicidad'),
      comentarios: comments,
    };

    return this.sendCase(jsonParams);
  }

  sendCaseMantenimiento(datosAfiliado: any, domicilioAfiliado: any, infoEntrega: any, infoSolicitud: any): Observable<any>  {

    return new Observable<any>(observable => {
      const tipo = infoSolicitud.tipo !== null ?
            infoSolicitud.tipo === 'Otro' ?
                this.removeSpaces(infoSolicitud.tipoOtro) : this.removeSpaces(infoSolicitud.tipo)
            : '0';

      const infoMantenimientoString = `Información%20de%20la%20solicitud%0AModelo%20(marca)%20/%20Tecnología:%20${this.removeSpaces(infoSolicitud.modeloTectnologia)}%0ATipo%20de%20falla:%20${this.removeSpaces(tipo)}%0A%0A`;
      const comments = `${this.afiliadosToString(datosAfiliado)}${infoMantenimientoString}${this.addressToString(domicilioAfiliado)}${this.deliveryInfoToString(infoEntrega)}`;

      const jsonParams = {
        email: this.removeSpaces(datosAfiliado.correo),
        suppliedname: this.removeSpaces(datosAfiliado.razonSocial),
        subject: this.removeSpaces('Solicitud de Mantenimiento'),
        comentarios: comments,
      };

      this.sendCase(jsonParams).subscribe( result => {
        if (result !== null && result.length > 0) {
          if (result[0].respuesta !== null) {
            // si el formulario contiene evidencias mandarlas a salesforece
            const images = Object.values(infoSolicitud.images);
            if ( images.reduce( (flag: boolean, image: any) => {

              if (image.payload && image.payload !== null) {
                flag = true;
              }

              return flag;
            }, false) ) {
              const jsonParamsImage = {
                request: {
                  recordId: result[0].respuesta,
                  contentVersion: images.reduce( (array: Array<any>, val: any) => {
                    if (val.payload && val.payload != null) {
                      array.push({
                        title: val.name,
                        fileExtension: val.extension,
                        versionData : val.payload
                      });
                    }
                    return array;
                  }, []),
                }
              };

              console.log(jsonParamsImage);
              this.sendCaseImage(jsonParamsImage).subscribe( resultImages => {
                observable.next(resultImages);
              });
            } else {
              observable.next(result);
            }

          } else {
            observable.next(result);
          }
        }
      });
    });
  }

  sendCaseCapacitacion(datosAfiliado: any, domicilioAfiliado: any, infoEntrega: any, infoSolicitud: any): Observable<any> {

    const otro = infoSolicitud.otraCapacitacion !== null
      && infoSolicitud.otraCapacitacion !== ''
      ? `Otro:%20${this.removeSpaces(infoSolicitud.otraCapacitacion)}`
      : this.removeSpaces(infoSolicitud.tipo);

    const infoRollosString = `Información%20de%20la%20solicitud%0ATipo%20de%20capacitación%20solicitada:%20${this.removeSpaces(infoSolicitud.noEquipos)}%0A${otro}%0A%0A`;

    const comments = `${this.afiliadosToString(datosAfiliado)}${infoRollosString}${this.addressToString(domicilioAfiliado)}${this.deliveryInfoToString(infoEntrega)}`;

    const jsonParams = {
      email: this.removeSpaces(datosAfiliado.correo),
      suppliedname: this.removeSpaces(datosAfiliado.razonSocial),
      subject: this.removeSpaces('Solicitud de Capacitación'),
      comentarios: comments,
    };

    return this.sendCase(jsonParams);
  }

  sendCase(jsonParams): Observable<any> {

    return this.sendRequest<any>(this.urlCase + '/CABSendCase', jsonParams);
  }

  sendCaseImage(jsonParams): Observable<any> {

    return this.sendRequest<any>(this.urlCase + '/CABSendCaseImage', jsonParams);
  }


  private sendRequest<T>(url, jsonParams: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = {
      headers: headers,
    };

    console.log(jsonParams);
    return this.http.post<T>(url, jsonParams, options );
  }

  afiliadosToString(datosAfiliado: any) {
    return `Datos%20de%20la%20afiliación%0ANúmero%20de%20afiliación:%20${this.removeSpaces(datosAfiliado.numeroAfiliacion)}%0ACorreo%20electrónico:%20${this.removeSpaces(datosAfiliado.correo)}%0ARazón%20social:%20${this.removeSpaces(datosAfiliado.razonSocial)}%0A%0A`;
  }

  addressToString(domicilioAfiliado: any) {
    return `Domicilio%20de%20la%20afiliación%0ACalle:%20${this.removeSpaces(domicilioAfiliado.calle)}%0ANúmero%20int:%20${this.removeSpaces(domicilioAfiliado.noInterior)}%0ANúmero%20ext:%20${this.removeSpaces(domicilioAfiliado.noExterior)}%0ACódigo%20postal:%20${this.removeSpaces(domicilioAfiliado.cp)}%0AEstado:%20${this.removeSpaces(domicilioAfiliado.estado)}%0ACiudad:%20${this.removeSpaces(domicilioAfiliado.ciudad)}%0AColonia:%20${this.removeSpaces(domicilioAfiliado.colonia)}%0A%0A`;
  }

  deliveryInfoToString(infoEntrega: any) {
    return `Información%20de%20entrega%0ATeléfono%20de%20contacto:%20${this.removeSpaces(infoEntrega.tel)}%0APersona%20que%20recibe:%20${this.removeSpaces(infoEntrega.personaRecibe)}%0AHorario%20de%20atención:%20${this.removeSpaces(infoEntrega.horarioAtencion)}%0A%0A`;
  }

  removeSpaces(text: string) {

    if (text === null) {
      return '';
    }

    let resultText = text.toString().trim();
    resultText = resultText.split(' ').join('%20');

    return resultText;
  }

}
