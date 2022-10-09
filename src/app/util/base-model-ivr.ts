export class BaseModelIvr {
  static CARD = 'card';
  static ACCOUNT_NUMBER = 'account_number';
  static PHONE_NUMBER = 'phone_number';
  static COMMENTS = 'comments';
  static EMAIL = 'email';
  static NAME = 'name';
  static RECAPTCHA_TOKEN = 'recaptcha_token';
  static HOST = 'host';

  public card: string;
  public accountNumber: string;
  public phoneNumber: string;
  public comments: string;
  public email: string;
  public name: string;
  public recaptcha_token: string;
  public host: string;

  public IMAGES_NAMES = [];

  public clear() {
    this.card = '';
    this.accountNumber = '';
    this.phoneNumber = '';
    this.comments = '';
    this.email = '';
    this.name = '';
    this.recaptcha_token = '';
    this.host = '';
  }

}
