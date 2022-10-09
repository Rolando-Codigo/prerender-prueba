import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideollamadaComponent } from './videollamada/videollamada.component';

const routes: Routes = [
  {
    path: 'videollamada',
    component: VideollamadaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OcularRoutingModule { }
