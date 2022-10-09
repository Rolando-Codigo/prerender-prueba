import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-btn-crear-cuenta',
  templateUrl: './btn-crear-cuenta.component.html',
  styleUrls: ['./btn-crear-cuenta.component.css']
})
export class BtnCrearCuentaComponent implements OnInit {

  @Input() url = 'https://quierosercliente.hey.inc/#/crear-usuario?producto=FEM';
  @Input() title = 'Quiero mi cuenta';
  @Input() target = '_blank';
  @Input() classStyle = 'btn btn-primary'; 
  fecha: any;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private blog: BlogService,
    @Inject(PLATFORM_ID) public platformId: Object
    ) { 
    }

    ngOnInit(): void {
      this.route.queryParams.subscribe(params => {

        if(isPlatformBrowser(this.platformId)) {
          const searchQ = location.search.substring(1);
          if (searchQ !== '') {
            const queryParams: Object = JSON.parse(
              '{"' + searchQ.replace(/&/g, '","').replace(/=/g, '":"') + '"}' ,
              (key, value) => {
                return key === '' ? value : decodeURIComponent(value);
              }
            );
  
            Object.keys(queryParams).forEach( (it, i) => {
              this.url += `&${Object.keys(queryParams)[i]}=${Object.values(queryParams)[i]}`;
            });
          }
        }
      });
    }

}

