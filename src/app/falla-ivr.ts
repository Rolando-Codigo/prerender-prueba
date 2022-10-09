import {ImagenIvr} from './imagen-ivr';
import {BaseModelIvr} from './base-model-ivr';

export class FallaIvr extends BaseModelIvr {
  static DESCRIPTION = 'description';
  static DEVICE = 'device';
  static APP_VERSION = 'app_version';
  static TIPOPRODUCTO = 'tipo_producto';
  static MOTIVOCASO = 'motivo_caso';
  static OS = 'os';
  static EVIDENCE = 'evidence';
  static EVIDENCE_REFERENCE = 'evidence_reference';
  static EVIDENCE_EXTENSION = 'evidence_extension';
  static EVIDENCE_2 = 'evidence_2';
  static EVIDENCE_2_REFERENCE = 'evidence_2_reference';
  static EVIDENCE_2_EXTENSION = 'evidence_2_extension';
  static EVIDENCE_3 = 'evidence_3';
  static EVIDENCE_3_REFERENCE = 'evidence_3_reference';
  static EVIDENCE_3_EXTENSION = 'evidence_3_extension';
  static EVIDENCE_4 = 'evidence_4';
  static EVIDENCE_4_REFERENCE = 'evidence_4_reference';
  static EVIDENCE_4_EXTENSION = 'evidence_4_extension';

  static OS_ANDROID = 'Android';
  static OS_IOS = 'iOS';
  static APP_VERSION_7_9_0 = '7.9.0';
  static APP_VERSION_7_8_4 = '7.8.4';
  static APP_VERSION_7_7_1 = '7.7.1';
  static APP_VERSION_7_7_0 = '7.7.0';
  static APP_VERSION_7_6_1 = '7.6.1';
  static APP_VERSION_7_5_1 = '7.5.1';
  static APP_VERSION_7_4_3 = '7.4.3';
  static APP_VERSION_7_4_2 = '7.4.2';

  static APP_VERSION_7_9_1 = '7.9.1';
  static APP_VERSION_7_8_3 = '7.8.3';
  static APP_VERSION_7_8_2 = '7.8.2';
  static APP_VERSION_7_8_1 = '7.8.1';

  static APP_VERSION_OLD = 'Otra';

  static OSS = [
    FallaIvr.OS_IOS,
    FallaIvr.OS_ANDROID,
  ];

  static APP_VERSIONS = [
    FallaIvr.APP_VERSION_7_8_4,
    FallaIvr.APP_VERSION_7_7_1,
    FallaIvr.APP_VERSION_7_7_0,
  ];

  static APP_VERSIONS_IOS = [
    FallaIvr.APP_VERSION_7_9_1,
    FallaIvr.APP_VERSION_7_9_0,
    FallaIvr.APP_VERSION_7_8_3,
    FallaIvr.APP_VERSION_7_8_2,
    FallaIvr.APP_VERSION_7_8_1,
    FallaIvr.APP_VERSION_OLD,
  ];

  static APP_VERSIONS_ANDROID = [
    FallaIvr.APP_VERSION_7_9_0,
    FallaIvr.APP_VERSION_7_8_4,
    FallaIvr.APP_VERSION_7_7_1,
    FallaIvr.APP_VERSION_7_7_0,
    FallaIvr.APP_VERSION_7_6_1,
    FallaIvr.APP_VERSION_OLD,
  ];

  public IMAGES_NAMES = [
    FallaIvr.EVIDENCE,
    FallaIvr.EVIDENCE_2,
    FallaIvr.EVIDENCE_3,
    FallaIvr.EVIDENCE_4,
  ];

  public description: string;
  public device: string;
  public appVersion: string;
  public os: string;
  public evidence = new ImagenIvr();
  public evidence2 = new ImagenIvr();
  public evidence3 = new ImagenIvr();
  public evidence4 = new ImagenIvr();

  constructor() {
    super();
  }

  public clear() {
    super.clear();
    this.description = '';
    this.device = '';
    this.appVersion = '';
    this.os = '';
    this.evidence.clear();
    this.evidence2.clear();
    this.evidence3.clear();
    this.evidence4.clear();
  }
}
