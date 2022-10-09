import { RouterModule, Routes } from '@angular/router';

import { Error404Component } from './error404.component';

import { UtmsGuard } from '../services/utms.guard';

const app_routes: Routes = [
    { path: '404', component: Error404Component, canActivate: [UtmsGuard] },
];


export const Error404Routing = RouterModule.forChild(app_routes);
