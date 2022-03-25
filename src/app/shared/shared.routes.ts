import { Routes } from '@angular/router';
import { LaunchesDetailsComponent } from '../components/launches/launches-details/launches-details.component';
import { LaunchesComponent } from '../components/launches/launches.component';


export const SharedRoutes: Routes = [
  {
    path: 'launches',
    component: LaunchesComponent,
  },
  {
    path: 'launches/:id',
    component: LaunchesDetailsComponent,
  },
];
