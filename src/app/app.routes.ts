import { Routes } from '@angular/router';
import { FichaDePaciente } from './ficha-de-paciente/ficha-de-paciente';
import { IngresoSignos } from './ingreso-signos/ingreso-signos';
import { Home } from './home/home';
import { SosComponent } from './sos/sos.component';
import { EstadoCitasComponent } from './estado-citas/estado-citas.component';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'sos', component: SosComponent },
  { path: 'ficha-medica', component: FichaDePaciente },
  { path: 'estado-citas', component: EstadoCitasComponent },
  { path: 'signos-vitales', component: IngresoSignos },
  { path: '**', redirectTo: '', pathMatch: 'full' }, 
  // Este es un wildcard para redirigir a la página de inicio si no se encuentra la ruta
];
