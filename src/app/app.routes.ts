import { Routes } from '@angular/router';
import { Home } from './home/home';
import { SosComponent } from './sos/sos.component';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'sos', component: SosComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
