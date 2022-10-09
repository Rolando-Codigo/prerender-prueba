import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from './services/blog.service';
import { CookieServices } from './services/cookie.service';
import { filter } from 'rxjs/operators';
import { MetaTagsService } from './services/meta-tags.service';
import { isPlatformBrowser } from '@angular/common';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'heybanco';
  galleta: any = '0';

  constructor(
    public router: Router,
    private blog: BlogService,
    private cookieServices: CookieServices,
    @Inject(PLATFORM_ID) public platformId: Object,
    private metaTagsService: MetaTagsService) {
  }

  ngOnInit() {
    // this.galleta = this.cookieServices.getCookie2('userCookie');
    // this.exportacionPremiados();

    if (isPlatformBrowser(this.platformId)) {
      this.cookieServices.subscriptionGalleta()
        .pipe(
          filter( it => it != null)
        )
        .subscribe( it => {
        this.galleta = it;
      });
    }

    this.setMetaTags();
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Hey Banco, Tu Banco en línea favorito');
    this.metaTagsService.setMetaDescription('Banco digital que te ofrece lo mismo que un banco tradicional y más. Descarga la App y abre tu cuenta en 5 minutos. El primer banco 100% digital en México.');
  }

  /*
  exportacionPremiados() {
    const nombreArchivo = 'Gandores-GIVEAWAY';

    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: false,
      useBom: true,
      noDownload: false,
      headers: ['nombre', 'correo', 'folio', 'telefono', 'domicilio', 'cidudad', 'cp', 'Hora entrega' ]
    };

    return new AngularCsv( datosExcel.map( it => {
      return {
        nombreGanador: it.nombreGanador || '',
        correoGanador: it.correoGanador || '',
        folio: it.premio != null ? it.premio.folio || '' : '',
        telefonoGanador: it.telefonoGanador || '',
        domicilio: it.domicilio != null ? it.domicilio.domicilio || '' : '',
        ciudad: it.domicilio != null ? it.domicilio.ciudad || '' : '',
        cp: it.domicilio != null ? it.domicilio.cp || '' : '',
        horaEntrega: it.domicilio != null ? it.domicilio.horaEntrega || '' : '',
      };
    }), nombreArchivo, options);
  }
  */
}
