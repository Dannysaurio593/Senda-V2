import { Component } from '@angular/core';

@Component({
  selector: 'app-ficha-de-paciente',
  imports: [],
  templateUrl: './ficha-de-paciente.html',
  styleUrl: './ficha-de-paciente.css',
})
export class FichaDePaciente {
// DATOS GENERALES DEL PACIENTE
  nombrePaciente: string = 'Carlos Eduardo Mendoza';
  codigoExpediente: string = 'SENDA-2026-8834';
  edad: number = 42;
  
  // DATOS MÉDICOS CRÍTICOS
  tipoSangre: string = 'O Positivo (O+)';
  contactoEmergencia: string = 'María Laura Mendoza (Esposa)';
  telefonoEmergencia: string = '098 765 4321';
  
  // SEGUIMIENTO DEL DÍA
  fechaActual: string = '21 de Mayo, 2026';
  proximaCita: string = 'Lunes 25 de Mayo - 10:00 AM';

}
