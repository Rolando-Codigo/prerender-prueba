export class ImagenIvr {
  public REFERENCE = 'reference';
  public IMAGE_PAYLOAD = 'imagen';

  public reference: string;
  public payload: string;
  public base64Head: string;
  public mimetype: string;
  public extension: string;
  public name: string;
  public size: number;

  constructor() {}

  public clear = () => {
    this.reference = '';
    this.payload = '';
    this.base64Head = '';
    this.mimetype = '';
    this.extension = '';
    this.name = '';
    this.size = 0;
  }
}
