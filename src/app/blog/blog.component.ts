
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticuloInterface } from '../models/articulos.model';
import { CategoriasInterface } from '../models/categorias.model';
import { BlogService } from '../services/blog.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {


  categoria: string | undefined;
  categorias!: CategoriasInterface[] | undefined;

  articulos: any[] | [] = [];
  articulosComplete = [];
  startArticulos = 0;
  startArticulosByCategoria = 0;
  loading = false;


  constructor(
    public blogService: BlogService,
    private route: ActivatedRoute,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoria = params.clave;
      this.startArticulos = 0;
      this.startArticulosByCategoria = 0;
      this.articulos = [];
      this.articulosComplete = [];
      this.initData();
    });
  }

  async initData() {
    this.categorias = await this.blogService.getCategorias().toPromise();
    this.filtrarCategoria();
  }

  filtrarCategoria() {
    if (this.categoria !== undefined && this.categoria !== 'todos') {
      const categoriaTemp = this.categorias.find( it => it.categoria === this.categoria);
      console.log(categoriaTemp);
      this.blogService.getArtiuclosByCategoria(categoriaTemp.id).toPromise().then( articulos => {
        this.articulosComplete = [...this.articulosComplete, ... articulos];
        this.articulos = this.articulosComplete;
        this.startArticulosByCategoria = this.articulosComplete.length + 1;
        this.formatArticulos();
        this.loading = false;
      });
    } else {
      this.blogService.getArtiuclos().toPromise().then( articulos => {
        this.articulosComplete = [...this.articulosComplete, ... articulos];
        this.articulos = this.articulosComplete;
        this.startArticulos = this.articulosComplete.length + 1;
        this.formatArticulos();
        this.loading = false;
      });
    }
  }

  formatArticulos() {

    // this.articulos = this.articulos.filter(it => it.imagen.length > 0 ).sort( (a, b) => (a.fecha < b.fecha) ? 1 : -1);
    console.log(this.articulos);
    // this.articulos = [...this.articulos, ...this.articulos, ...this.articulos, ...this.articulos, ...this.articulos, ...this.articulos];

    // partir la lista en partes de 6
    let temporary = this.chunckArrayInGroups(this.articulos, 6) as Array<any>;
    temporary = temporary.map( array => {
      switch (array.length) {
        case 1:
          array = [
            [array[0]],
          ];
          break;
        case 2:
          array = [
            [array[0], array[1]],
          ];
          break;
        case 3:
          array = [
            [array[0]],
            [array[1], array[2], ],
          ];
          break;
        case 4:
          array = [
            [array[0]],
            [array[1], array[2], array[3]],
          ];
          break;
        case 5:
          array = [
            [array[0]],
            [array[1], array[2], array[3]],
            [array[4]],
          ];
          break;
        case 6:
          array = [
            [array[0]],
            [array[1], array[2], array[3]],
            [array[4], array[5]],
          ];
          break;
      }
      return array;
    });

    this.articulos = temporary.reduce( (array, val) => {
      array = [...array, ...val];
      return array;
    }, []);
  }

  chunckArrayInGroups(arr: ArticuloInterface[], size: number) {
    const chunk = [];
    let i;
    for (i = 0; i <= arr.length; i += size) {
      chunk.push(arr.slice(i, i + size));
    }
    return chunk;
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


  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll($event: Event) {
  //   const pos = (document.documentElement.scrollTop || document.body.scrollTop) ;
  //   const max = document.documentElement.scrollHeight;

  //    if ((pos + 1800) >= (max))   {
  //      if (!this.loading) {
  //         this.filtrarCategoria();
  //      }
  //    }
  // }
}
