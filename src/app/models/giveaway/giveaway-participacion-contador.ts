export class GiveawayParticipacionContador {

  static FECHA_CONSULTA = 'fechaConsulta';
  static CONTADOR_AUX = 'contadorAux';
  static ANO_PARTICIPA = 'annioParticipa';
  static MES_PARTICIPA = 'mesParticipa';

  public fechaConsulta: string;
  public contadorAux: number;
  public annioParticipa: number;
  public mesParticipa: number;

  constructor() {}

  public clear() {
    this.fechaConsulta = '';
    this.contadorAux = 0;
    this.annioParticipa = 0;
    this.mesParticipa = 0;
  }
}
