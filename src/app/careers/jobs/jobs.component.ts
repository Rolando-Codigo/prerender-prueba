import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CareersService, Career } from '../../services/careers.service';
import { environment } from '../../../environments/environment';
import { MetaTagsService } from 'src/app/services/meta-tags.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.scss']
})
export class JobsComponent implements OnInit {

  environment = environment;
  careers: Career[] = [];

  constructor(private _careersService: CareersService, private router: Router,private metaTagsService: MetaTagsService) { }

  ngOnInit() {
    this.careers = this._careersService.getCareers();
    this.setMetaTags();
  }

  careerDetail(idx: number) {
    this.router.navigate(['/careers/jobs', idx]);
  }

  setMetaTags() : void {
    this.metaTagsService.setTitle('Únete a nuestro equipo | Vacantes disponibles');
    this.metaTagsService.setMetaDescription('Conoce nuestras vacantes disponibles, aplica y forma parte de nuestro equipo de forma presencial, híbrida o remota.');
  }
}
