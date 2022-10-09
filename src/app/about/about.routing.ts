import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about.component';
import { ManuelComponent } from './manuel-rivero/manuel-rivero.component';

import { UtmsGuard } from '../services/utms.guard';

const app_routes: Routes = [
    { path: '', component: AboutComponent, canActivate: [UtmsGuard] },
    { path: 'manuel-rivero', component: ManuelComponent, canActivate: [UtmsGuard] }
];


export const AboutRouting = RouterModule.forChild(app_routes);
