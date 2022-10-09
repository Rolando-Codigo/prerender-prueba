import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OcularService {
  constructor() { }
  Cargar() {
    this.eliminar();
    const script = document.createElement('script');
    script.src = 'https://widget.ocularsolution.com/service/ocular/js/ocular-widget.js?v=1.1.1';
    script.setAttribute('code', '2f977ccdad4f641c0782631755067c28csmqH8ae8E9QK2fVdSXJMRCyo9Hi3JnrRBueGIdb4ghdksa1f60tLOAdzI1');
    script.setAttribute('name', 'ocular-solution-widget');
    const body = document.getElementsByTagName('body')[0];
    body.appendChild(script);
    const script2 = document.createElement('script');
    script2.text = 'const onOcularWidgetReady = () => { ' +
      ' ocularWidget.hide() ' +
      '}';
    script2.setAttribute(
      'name',
      'script_ocular',
    );
    try {
      body.appendChild(script2);
    }catch(e){
      // console.error(e);
    }
  }
  eliminar() {
    if(document.getElementsByName('ocular-solution-widget').length > 0) {
      document.getElementsByName('ocular-solution-widget')[0]?.remove();
      document.getElementsByName('script_ocular')[0]?.remove();
      document.getElementsByName('ocular-order-tracker')[0]?.remove();
      document.getElementsByName('ocular-widget')[0]?.remove();
      document.getElementById('ocular-widget-popup')?.remove();
      document.getElementById('ocular-widget-container')?.remove();
      document.getElementById('ocular-widget-toggler')?.remove();
      localStorage.removeItem('ocular-solution-widget-id');
      localStorage.removeItem('ocular-app');
      localStorage.removeItem('ocular-solution-widget');
      localStorage.removeItem('ocular-app-version-checker');
      sessionStorage.removeItem('ocular-popup-displayed');
    }
  }
}
