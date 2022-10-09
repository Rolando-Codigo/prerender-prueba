import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CareersService } from '../../../services/careers.service';
import { environment } from '../../../../environments/environment';
import { MetaTagsService } from 'src/app/services/meta-tags.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.scss']
})
export class DetailComponent implements OnInit {

  environment = environment;
  career: any = {};
  textArray: any = {};

  constructor(private activatedRoute: ActivatedRoute, private _careersService: CareersService, private router: Router,private metaTagsService: MetaTagsService) {
    this.activatedRoute.params.subscribe(params => {
      this.career = this._careersService.getCareer(params['id']);
    });
  }

  ngOnInit() {
    this.setMetaTags();
  }

  careerForm() {
    this.router.navigate(['/careers/form']);
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Compártenos tu curriculum ');
    this.metaTagsService.setMetaDescription('Sube tu CV y comparte tu información profesional, conocimientos y funciones a nuestro equipo de reclutamiento.');
  }
}
