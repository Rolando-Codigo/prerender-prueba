export class GiveawayParticipacionError {
  static TRACE_ID = 'traceid';
  static CODE = 'code';
  static ERROR = 'error';
  static MESSAGE = 'message';
  static status = 'status';
  static timestamp = 'timestamp';

  public traceid: string;
  public code: string;
  public error: string;
  public message: string;
  public status: number;
  public timestamp: string;

  public constructor(traceid?: string, code?: string, error?: string, message?: string, status?: number, timestamp?: string) {
    this.traceid = traceid;
    this.code = code;
    this.error = error;
    this.message = message;
    this.status = status;
    this.timestamp = timestamp;
  }

  public clear() {
    this.traceid = '';
    this.code = '';
    this.error = '';
    this.message = '';
    this.status = 0;
    this.timestamp = '';
  }
}
