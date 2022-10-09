import { RouterModule, Routes } from '@angular/router';

import { CareersComponent } from './careers.component';
import { JobsComponent } from './jobs/jobs.component';
import { DetailComponent } from './jobs/detail/detail.component';

import { UtmsGuard } from '../services/utms.guard';

const app_routes: Routes = [
    { path: '', component: CareersComponent, canActivate: [UtmsGuard] },
    { path: 'jobs', component: JobsComponent, canActivate: [UtmsGuard] },
    { path: 'jobs/:id', component: DetailComponent, canActivate: [UtmsGuard] }
];


export const SCareersRouting = RouterModule.forChild(app_routes);
