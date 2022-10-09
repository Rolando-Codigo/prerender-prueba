import {ImagenIvr} from './imagen-ivr';
import {BaseModelIvr} from './base-model-ivr';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { IvrService } from '../services/ivr.service';

declare const getModal: any;

export class IvrBaseComponent {
  static FILE_CHANGE_ERROR_INVALID_MIMETYPE = 'INVALID_MIMETYPE';
  static FILE_CHANGE_ERROR_INVALID_FILESIZE = 'INVALID_FILESIZE';
  static MODAL_TYPE_EMAIL = 'email';
  static MODAL_TYPE_SUCCESS = 'success';
  static MODAL_TYPE_ERROR = 'error';
  static MODAL_TYPE_CAPTCHA = 'captcha';
  static MODAL_TYPES = [
    IvrBaseComponent.MODAL_TYPE_EMAIL,
    IvrBaseComponent.MODAL_TYPE_SUCCESS,
    IvrBaseComponent.MODAL_TYPE_ERROR,
  ];
  // TODO: Cambiar a otra forma de obtencion
  static RECAPTCHA_KEY = '6LeHqkgaAAAAAMT4rggDsxbc9-1rgoKQb-mwkMQh';

  public MODEL = BaseModelIvr;

  public busy = false;
  public clearing = false;
  public modalType;
  public modal;

  public identifier = BaseModelIvr.CARD;

  public isEmailRequired: boolean;

  public identifierForm = new FormControl(this.identifier);
  public emailForm = new FormControl('');
  public nameForm = new FormControl('');
  public cardForm = new FormControl('', [
    Validators.required,
    Validators.minLength(16),
    Validators.maxLength(16),
    Validators.pattern(/^\d*$/),
  ]);
  public phoneNumberForm = new FormControl('');
  public accountNumberForm = new FormControl('');
  public captcha = new FormControl('', [
    Validators.required,
  ]);

  public form = new FormGroup({});

  public IDENTIFIER_VALUES = [
    BaseModelIvr.CARD,
    BaseModelIvr.ACCOUNT_NUMBER,
    BaseModelIvr.PHONE_NUMBER,
  ];

  public IDENTIFIER_VALUES_TEXT = {};

  protected VALID_MIMETYPES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
  ];

  protected MESSAGES = {};

  protected FILE_CHANGE_ERRORS = [
    IvrBaseComponent.FILE_CHANGE_ERROR_INVALID_MIMETYPE,
  ];

  constructor() {

    this.IDENTIFIER_VALUES_TEXT[BaseModelIvr.CARD] = 'Número de Tarjeta Hey';
    this.IDENTIFIER_VALUES_TEXT[BaseModelIvr.ACCOUNT_NUMBER] = 'Número de Cuenta Hey';
    this.IDENTIFIER_VALUES_TEXT[BaseModelIvr.PHONE_NUMBER] = 'Número de Teléfono';
    this.IDENTIFIER_VALUES_TEXT[BaseModelIvr.COMMENTS] = 'Comentarios';
    this.IDENTIFIER_VALUES_TEXT[BaseModelIvr.EMAIL] = 'Correo';
    this.IDENTIFIER_VALUES_TEXT[BaseModelIvr.NAME] = 'Nombre';
    this.IDENTIFIER_VALUES_TEXT[BaseModelIvr.RECAPTCHA_TOKEN] = 'Recaptcha';

    this.MESSAGES[IvrService.ERROR_TYPE_REQUIRED] = '{field} es requerido.';
    this.MESSAGES[IvrService.ERROR_TYPE_REQUIRED_WITH] = {
      message: '{field} es requerido si {values} estan presentes.',
      or: [
        'values',
      ],
    };
    this.MESSAGES[IvrService.ERROR_TYPE_REQUIRED_WITHOUT] = {
      message: '{field} es requerido si {values} no estan presentes.',
      or: [
        'values',
      ],
    };
    this.MESSAGES[IvrService.ERROR_TYPE_REQUIRED_WITH_ALL] = {
      message: '{field} es requerido si {values} estan presentes.',
      and: [
        'values',
      ],
    };
    this.MESSAGES[IvrService.ERROR_TYPE_REQUIRED_WITHOUT_ALL] = {
      message: '{field} es requerido si {values} no estan presentes.',
      and: [
        'values',
      ],
    };
    this.MESSAGES[IvrService.ERROR_TYPE_LENGTH] = {
      message: {
       'string': '{field} debe contener {values} carácter.',
       'array': '{field} debe contener {values} elemento.',
       'digits': '{field} debe contener {values} digito.',
       'string_plural': '{field} debe contener {values} carácteres.',
       'array_plural': '{field} debe contener {values} elementos.',
       'digits_plural': '{field} debe contener {values} digitos.',
      },
    };
    this.MESSAGES[IvrService.ERROR_TYPE_NUMERIC] = '{field} debe ser numérico.';
    this.MESSAGES[IvrService.ERROR_TYPE_AMOUNT_CURRENCY] = '{field} debe ser un monto.';
    this.MESSAGES[IvrService.ERROR_TYPE_DATE_TIME] = '{field} debe especificarse en el formato {format}.';
    this.MESSAGES[IvrService.ERROR_TYPE_ONE_OF] = {
      message: '{field} debe ser {values}.',
      or: [
        'values',
      ],
    };
    this.MESSAGES[IvrService.ERROR_TYPE_BASE64] = '{field} debe ser base64.';
    this.MESSAGES[IvrBaseComponent.FILE_CHANGE_ERROR_INVALID_MIMETYPE] = {
      message: 'El archivo {field} debe ser de uno de los siguientes tipos: {values}.',
      or: ['values'],
    };

    this.IDENTIFIER_VALUES = [
      BaseModelIvr.CARD,
      BaseModelIvr.ACCOUNT_NUMBER,
      BaseModelIvr.PHONE_NUMBER
    ];

    this.identifierForm.valueChanges.subscribe(identifier => {
      this.cardForm.setValidators(null);
      this.accountNumberForm.setValidators(null);
      this.phoneNumberForm.setValidators(null);

      switch (identifier) {
        case BaseModelIvr.CARD:
          this.cardForm.setValidators([
            Validators.required,
            Validators.minLength(16),
            Validators.maxLength(16),
            Validators.pattern(/^\d*$/),
          ]);
          break;
        case BaseModelIvr.ACCOUNT_NUMBER:
          this.accountNumberForm.setValidators([
            Validators.required,
            Validators.minLength(12),
            Validators.maxLength(12),
            Validators.pattern(/^\d*$/),
          ]);
          break;
        case BaseModelIvr.PHONE_NUMBER:
          this.phoneNumberForm.setValidators([
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(10),
            Validators.pattern(/^\d*$/),
          ]);
          break;
        default:
          break;
      }
      this.cardForm.updateValueAndValidity();
      this.accountNumberForm.updateValueAndValidity();
      this.phoneNumberForm.updateValueAndValidity();
    });

    this.form.addControl(BaseModelIvr.CARD, this.cardForm);
    this.form.addControl(BaseModelIvr.ACCOUNT_NUMBER, this.accountNumberForm);
    this.form.addControl(BaseModelIvr.PHONE_NUMBER, this.phoneNumberForm);
    this.form.addControl(BaseModelIvr.EMAIL, this.emailForm);
    this.form.addControl(BaseModelIvr.NAME, this.nameForm);
    this.form.addControl(BaseModelIvr.RECAPTCHA_TOKEN, this.captcha);
  }

  public set requireEmail(value: boolean) {
    this.isEmailRequired = value;
    if (this.isEmailRequired) {
      this.emailForm.setValidators([Validators.required, Validators.email]);
      this.nameForm.setValidators([Validators.required]);
    } else {
      this.emailForm.setValidators(null);
      this.nameForm.setValidators(null);
    }
    this.emailForm.updateValueAndValidity();
    this.nameForm.updateValueAndValidity();
  }

  public getMessage(id: string, parameters: object = {}, options: object = {}): string {
    let message = this.MESSAGES[id];
    if (message == null) {
      return id;
    }

    if (typeof message === 'string') {
      message = {
        message: message,
      };
    }

    if (typeof message.message !== 'string') {
      if (!('alt' in options)) {
        options['alt'] = 'string';
      }

      if (!(options['alt'] in message.message)) {
        return id;
      }
      message.message = message.message[options['alt']];
    }

    const keys = Object.keys(parameters);
    let response = message.message;
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      let value = parameters[key];
      if (Array.isArray(value)) {
        if (value.length > 1 && 'or' in message && message.or.includes(key) ) {
          value = value.splice(-1, 1) + ' o ' + value[value.length - 1];
        } else if (value.length > 1) {
          value = value.splice(-1, 1) + ' y ' + value[value.length - 1];
        } else {
          value = value[0];
        }
      }

      response = response.replace(new RegExp(`\{${key}\}`, 'g'), value);
    }

    return response;
  }

  protected getErrorMessagesFromErrorResponse(error: object, callback?: (value: object, key: string, type: string) => void): object {
    const keys = Object.keys(error['error']);
    if (callback == null) {
      callback = this.getErrorMessageFromError.bind(this);
    }
    for (let i = 0; i < keys.length; i++) {
      for (let j = 0; j < error['error'][keys[i]].length; j++) {
        const type = error['error'][keys[i]][j].type;
        error['error'][keys[i]][j] = callback(error['error'][keys[i]][j], keys[i], type);
      }
    }
    return error;
  }

  public getErrorMessageFromError(value: object, key: string, type: string) {
    switch (type) {
      case IvrService.ERROR_TYPE_REQUIRED:
      case IvrService.ERROR_TYPE_BASE64:
      case IvrService.ERROR_TYPE_NUMERIC:
      case IvrService.ERROR_TYPE_AMOUNT_CURRENCY:
        value['message'] = this.getMessage(type, {field: key});
        break;
      case IvrService.ERROR_TYPE_REQUIRED_WITH:
      case IvrService.ERROR_TYPE_REQUIRED_WITHOUT:
      case IvrService.ERROR_TYPE_REQUIRED_WITH_ALL:
      case IvrService.ERROR_TYPE_REQUIRED_WITHOUT_ALL:
      case IvrService.ERROR_TYPE_ONE_OF:
      case IvrBaseComponent.FILE_CHANGE_ERROR_INVALID_MIMETYPE:
        value['message'] = this.getMessage(type, {field: key, values: value['values']});
        break;
      case IvrService.ERROR_TYPE_LENGTH:
        value['message'] = this.getMessage(type, {field: key, values: value['value']}, {alt: 'string_plural'});
        break;
      case IvrService.ERROR_TYPE_DATE_TIME:
      default:
        value['message'] = type;
        break;
    }

    return value;
  }

  public fileChanged(image: ImagenIvr, type: string) {}

  public fileChangeError(error: string, type: string, file: File) {}

  public fileChange(event, type) {
    const imagen = new ImagenIvr();
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];

      if (file.size > (1024 * 1024) * 2) {
        this.fileChangeError(IvrBaseComponent.FILE_CHANGE_ERROR_INVALID_FILESIZE, type, file);
        return;
      }

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
            this.fileChangeError(IvrBaseComponent.FILE_CHANGE_ERROR_INVALID_MIMETYPE, type, file);
            return;
          }

          imagen.payload = base64[1];
          imagen.base64Head = base64Head;
          imagen.mimetype = base64Mimetype;
          imagen.extension = base64Extension;
          imagen.size = file.size;
          imagen.name = file.name;

          this.fileChanged(imagen, loadedType);
        };
      })(this, type);
      reader.readAsDataURL(file);
    }
  }

  public removeFile(file: ImagenIvr, type: string) {
    file.clear();
  }

  public validateForm(): boolean {
    return this.cardForm.valid && this.accountNumberForm.valid && this.phoneNumberForm.valid
      && this.emailForm.valid && this.nameForm.valid;
      // && this.captcha.valid;
  }

  public showModal(type: string) {
    this.modalType = type;
    // modal.modal('dispose');
    // modal.modal({});
    this.modal.modal('show');
  }

  public initializeModal() {
    this.modal = getModal('#ivr-modal');
    this.modal.on('hide.bs.modal', (e) => {
      this.requireEmail = false;
      this.emailForm.reset();
      this.nameForm.reset();
    });
  }

  public clear() {
    this.requireEmail = false;
    // this.captcha = '';
    // this.emailForm.reset(this.email);
    // this.emailForm.setErrors(null);
    // this.nameForm.reset(this.name);
    // this.nameForm.setErrors(null);

    // this.phoneNumberForm.reset(this.phoneNumber);
    // this.phoneNumberForm.setErrors(null);
    // this.cardForm.reset(this.card);
    // this.cardForm.setErrors(null);
    // this.accountNumberForm.reset(this.accountNumber);
    // this.accountNumberForm.setErrors(null);

    this.identifierForm.updateValueAndValidity();
  }

}
