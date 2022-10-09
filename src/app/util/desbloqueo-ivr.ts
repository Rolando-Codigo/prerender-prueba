import {ImagenIvr} from './imagen-ivr';
import {BaseModelIvr} from './base-model-ivr';

export class DesbloqueoIvr extends BaseModelIvr {
  static INE_FRONT = 'ine_front';
  static INE_FRONT_REFERENCE = 'ine_front_reference';
  static INE_FRONT_EXTENSION = 'ine_front_extension';
  static INE_BACK = 'ine_back';
  static INE_BACK_REFERENCE = 'ine_back_reference';
  static INE_BACK_EXTENSION = 'ine_back_extension';
  static SELFIE = 'selfie';
  static SELFIE_REFERENCE = 'selfie_reference';
  static SELFIE_EXTENSION = 'selfie_extension';
  static PROOF_OF_RESIDENCY = 'proof_of_residency';
  static PROOF_OF_RESIDENCY_REFERENCE = 'proof_of_residency_reference';
  static PROOF_OF_RESIDENCY_EXTENSION = 'proof_of_residency_extension';

  // public STATIC = DesbloqueoIvr;

  public IMAGES_NAMES = [
    DesbloqueoIvr.INE_FRONT,
    DesbloqueoIvr.INE_BACK,
    DesbloqueoIvr.SELFIE,
    DesbloqueoIvr.PROOF_OF_RESIDENCY,
  ];

  public ineFront = new ImagenIvr();
  public ineBack = new ImagenIvr();
  public selfie = new ImagenIvr();
  public proofOfResidency = new ImagenIvr();

  constructor() {
    super();
  }

  public clear() {
    super.clear();
    this.ineFront.clear();
    this.ineBack.clear();
    this.selfie.clear();
    this.proofOfResidency.clear();
  }
}
