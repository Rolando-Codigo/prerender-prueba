import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';
import { ManuelComponent } from './manuel-rivero/manuel-rivero.component';

import { AboutRouting } from './about.routing';

@NgModule({
    declarations: [
        AboutComponent,
        ManuelComponent
    ],
    imports: [
        CommonModule,
        AboutRouting
    ]
})
export class AboutModule { }
