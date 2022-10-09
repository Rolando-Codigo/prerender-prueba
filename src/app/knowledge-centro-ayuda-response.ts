export class KnowledgeCentroAyudaResponse<T> {
  static MESSAGE = 'message';
  static DATA = 'data';
  static META = 'meta';

  public message: string;
  public data: T;
  public meta: any;
}
