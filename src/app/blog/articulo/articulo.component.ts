import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ArticuloInterface } from '../../models/articulos.model';
import { BlogService } from '../../services/blog.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  claveArticulo!: string;
  articulo!: ArticuloInterface;

  articulos!: any[];

  urlShare;

  constructor(
    public blogService: BlogService,
    private route: ActivatedRoute,
    public router: Router,
    @Inject(PLATFORM_ID) public platformId: Object
    ) {

      if (isPlatformBrowser(this.platformId)) {
        this.urlShare = document.location.href;
      }    
    }

  ngOnInit(): void {


    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }

      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo(0, 0);
      }
    });

    this.route.params.subscribe(params => {
      this.claveArticulo = params.clave;

      this.blogService.getArticuloFind(this.claveArticulo).toPromise().then( result => {
        this.articulo = result[0];

        this.blogService.getArtiuclosByCategoria(this.articulo.categoria.id).toPromise().then( result2 => {

          this.articulos = result2.slice(0, 3);
        });
      });

    });
  }

  verArticulo(id: number) {
    this.router.navigate(['/hey-media/articulo', id]);
  }

  changeFormatDate(dateP: string) {
    const dateArray = dateP.split('-');
    // tslint:disable-next-line:radix
    const day = `${this.getMonthName(parseInt(dateArray[1]))} ${parseInt(dateArray[2])} de  ${parseInt(dateArray[0])}`;
    return day;
  }

  getMonthName(number) {

    // tslint:disable-next-line:radix
    const n = parseInt(number);
    switch (n) {
        case 1:
            return 'Enero';
        case 2:
            return 'Febrero';
        case 3:
            return 'Marzo';
        case 4:
            return 'Abril';
        case 5:
            return 'Mayo';
        case 6:
            return 'Junio';
        case 7:
            return 'Julio';
        case 8:
            return 'Agosto';
        case 9:
            return 'Septiembre';
        case 10:
            return 'Octubre';
        case 11:
            return 'Noviembre';
        case 12:
            return 'Diciembre';
        default: return 'no name';
    }
  }
}
