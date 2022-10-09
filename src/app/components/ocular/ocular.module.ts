import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OcularRoutingModule } from './ocular-routing.module';
import { VideollamadaComponent } from './videollamada/videollamada.component';
@NgModule({
  declarations: [VideollamadaComponent],
  imports: [
    CommonModule,
    OcularRoutingModule
  ],
  exports: [VideollamadaComponent]
})
export class OcularModule { }
