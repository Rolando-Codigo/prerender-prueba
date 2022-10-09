import {ImagenIvr} from './imagen-ivr';

export class AclaracionIvr {

  public CARD = 'card';
  public ACCOUNT_NUMBER = 'account_number';
  public TRANSACTION_AMOUNT = 'transaction_amount';
  public TRANSACTION_DATE = 'transaction_date';
  public BUSINESS_NAME = 'business_name';
  public BALANCE_LOCKED_OR_PENDING = 'balance_locked_or_pending';
  public REASON = 'reason';
  public AGREEMENT = 'agreement';
  public COMMENTS = 'comments';
  public INE_FRONT = 'ine_front';
  public INE_FRONT_REFERENCE = 'ine_front_reference';
  public INE_FRONT_EXTENSION = 'ine_front_extension';
  public INE_BACK = 'ine_back';
  public INE_BACK_REFERENCE = 'ine_back_reference';
  public INE_BACK_EXTENSION = 'ine_back_extension';
  public CARD_FRONT = 'card_front';
  public CARD_FRONT_REFERENCE = 'card_front_reference';
  public CARD_FRONT_EXTENSION = 'card_front_extension';
  public CARD_BACK = 'card_back';
  public CARD_BACK_REFERENCE = 'card_back_reference';
  public CARD_BACK_EXTENSION = 'card_back_extension';
  public VOUCHER = 'voucher';
  public VOUCHER_REFERENCE = 'voucher_reference';
  public VOUCHER_EXTENSION = 'voucher_extension';

  public IMAGES_NAMES = [
    this.INE_FRONT,
    this.INE_BACK,
    this.CARD_FRONT,
    this.CARD_BACK,
    this.VOUCHER,
  ];

  public card: string;
  public accountNumber: string;
  public transactionAmount: string;
  public transactionDate: string;
  public businessName: string;
  public balanceLockedOrPending: boolean;
  public reason: string;
  public agreement: boolean;
  public comments: string;
  public ineFront = new ImagenIvr();
  public ineBack = new ImagenIvr();
  public cardFront = new ImagenIvr();
  public cardBack = new ImagenIvr();
  public voucher = new ImagenIvr();

  constructor() {}

  public clear = () => {
    this.card = '';
    this.accountNumber = '';
    this.transactionAmount = '';
    this.transactionDate = '';
    this.businessName = '';
    this.balanceLockedOrPending = false;
    this.reason = '';
    this.agreement = false;
    this.comments = '';
    this.ineFront.clear();
    this.ineBack.clear();
    this.cardFront.clear();
    this.cardBack.clear();
    this.voucher.clear();
  }
}
