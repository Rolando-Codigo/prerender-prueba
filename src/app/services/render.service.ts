import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RenderService {

  constructor(
    @Inject(DOCUMENT) private _document: Document
  ) { }

  public setJsonLd(renderer2: Renderer2, data: any): void {

    let script = renderer2.createElement('script');
    script.type = 'application/ld+json';
    script.text = `${JSON.stringify(data)}`;

    renderer2.appendChild(this._document.body, script);
  }

}
