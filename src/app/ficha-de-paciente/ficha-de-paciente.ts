import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ficha-de-paciente',
  imports: [CommonModule],
  templateUrl: './ficha-de-paciente.html',
  styleUrl: './ficha-de-paciente.css',
})
export class FichaDePaciente {
  // IMPORTANTE: Properties que se mostrarán en el HTML usando Interpolation ({{ }})
  // Cuando cambio estos valores aquí, se actualizan automáticamente en la pantalla
  // Ejemplo: {{ nombrePaciente }} muestra 'Carlos Eduardo Mendoza'
  
  // DATOS GENERALES DEL PACIENTE
  nombrePaciente: string = 'Carlos Eduardo Mendoza';
  codigoExpediente: string = 'SENDA-2026-8834';
  edad: number = 35;  // Usada en directiva [ngClass] para alerta de edad
  tipoSangre: string = 'O Positivo (O+)';  // Usada en directiva [ngStyle]
  
  // DATOS MÉDICOS CRÍTICOS
  contactoEmergencia: string = 'María Laura Mendoza (Esposa)';
  telefonoEmergencia: string = '098 765 4321';
  
  // SEGUIMIENTO DEL DÍA
  fechaActual: string = '21 de Mayo, 2026';
  proximaCita: string = 'Lunes 25 de Mayo - 10:00 AM';

  // IMPORTANTE: Colores dinámicos para alertas de la ficha - seleccionables visualmente
  colorEdadAlta: string = '#d32f2f';        // Rojo por defecto (Edad > 65)
  colorEdadNormal: string = '#2E5481';      // Azul por defecto (Edad <= 65)
  colorSangreOPositivo: string = '#ff6b6b'; // Rosa por defecto (Sangre O+)
  colorSangreOtros: string = '#d32f2f';     // Rojo por defecto (Otros grupos)

}
