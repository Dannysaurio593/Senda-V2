import { Routes } from '@angular/router';
import { FichaDePaciente } from './ficha-de-paciente/ficha-de-paciente';
import { IngresoSignos } from './ingreso-signos/ingreso-signos';

export const routes: Routes = [
  { path: 'ficha-medica', component: FichaDePaciente },
  { path: 'signos-vitales', component: IngresoSignos },
];
