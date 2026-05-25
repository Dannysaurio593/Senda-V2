import { Routes } from '@angular/router';
import { FichaDePaciente } from './ficha-de-paciente/ficha-de-paciente';
import { IngresoSignos } from './ingreso-signos/ingreso-signos';
import { Home } from './home/home';
import { SosComponent } from './sos/sos.component';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'sos', component: SosComponent },
  { path: 'ficha-medica', component: FichaDePaciente },
  { path: 'signos-vitales', component: IngresoSignos },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
