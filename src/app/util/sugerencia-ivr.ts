import {BaseModelIvr} from './base-model-ivr';

export class SugerenciaIvr extends BaseModelIvr {

  static PRODUCT = 'product';
  // TODO: Aqui se modifica para cambiar el listado de productos en SUGERENCIAS
  static PRODUCTS = [
    'App',
    'Cuenta Hey / Hey Palnorte',
    'Cuenta Hey Plus',
    'Hey shop',
    'Otro',
    'Pagaré',
    'Seguros Hey',
    'Tarjeta de Crédito Hey',
  ];

  public product: string;

  constructor() {
    super();
  }

  public clear() {
    super.clear();
    this.product = '';
  }
}
