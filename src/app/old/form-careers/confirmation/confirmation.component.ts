import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CareersService, Career } from '../../../services/careers.service';
import { environment } from '../../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-confirmation',
  templateUrl: './confirmation.component.html'
})
export class ConfirmationComponent implements OnInit {

  careers: Career[] = [];
  environment = environment;

  constructor(private _careersService: CareersService, private router: Router) { }

  ngOnInit() {
    this.careers = this._careersService.getCareers();
  }

  careerDetail(idx: number) {
    this.router.navigate(['/careers/jobs', idx]);
  }
}
