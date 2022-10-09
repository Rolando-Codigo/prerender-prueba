import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsComponent } from './jobs/jobs.component';
import { CareersComponent } from './careers.component';
import { DetailComponent } from './jobs/detail/detail.component';

import { SCareersRouting } from './careers.routing';

import { HeyComponentesSharedModule } from '../shared/heycomponentesshared.module';

@NgModule({
  declarations: [
    CareersComponent,
    JobsComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    SCareersRouting,
    HeyComponentesSharedModule
  ]
})
export class CareersModule { }
