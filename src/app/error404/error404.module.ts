
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Error404Component } from './error404.component';

import { Error404Routing } from './error404.routing';

import { HeySharedModule } from '../shared/heyshared.module';
import { HeyComponentesSharedModule } from '../shared/heycomponentesshared.module';
import { HeyBotonCuentaSharedModule } from '../shared/heybotoncuentashared.module';

@NgModule({
    declarations: [
        Error404Component
    ],
    imports: [
        CommonModule,
        Error404Routing,
        HeySharedModule,
        HeyComponentesSharedModule,
        HeyBotonCuentaSharedModule,
        RouterModule
    ]
})
export class Error404Module { }
