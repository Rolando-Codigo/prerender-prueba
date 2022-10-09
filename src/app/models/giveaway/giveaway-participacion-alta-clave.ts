export class GiveawayParticipacionAltaClave {

  static ID = 'id';
  static PARTICIPANTE = 'participante';
  static ANO = 'annio';
  static MES = 'mes';
  static NUMERO_CLICK = 'numeroClick';
  static FECHA_HORA = 'fechaHora';
  static IP = 'ip';
  static PARTICIPANTE_ID = 'id';
  static PARTICIPANTE_NUMERO = 'numero';
  static PARTICIPANTE_NOMBRE = 'nombre';
  static PARTICIPANTE_CORREO = 'correo';
  static PARTICIPANTE_CLAVE = 'clave';
  static PARTICIPANTE_ANO_PARTICIPA = 'annioParticipa';
  static PARTICIPANTE_MES_PARTICIPA = 'mesParticipa';

  public id: number;
  public participante:
    {id: number, numero: string, nombre: string, correo: string, clave: string, annioParticipa: number, mesParticipa: number};
  public annio: number;
  public mes: number;
  public numeroClick: number;
  public fechaHora: string;
  public ip: string;

  constructor() {}

  public clear() {
    this.id = 0;
    this.participante = {
      id: 0,
      numero: '',
      nombre: '',
      correo: '',
      clave: '',
      annioParticipa: 0,
      mesParticipa: 0,
    };
    this.annio = 0;
    this.mes = 0;
    this.numeroClick = 0;
    this.fechaHora = '';
    this.ip = '';
  }
}
