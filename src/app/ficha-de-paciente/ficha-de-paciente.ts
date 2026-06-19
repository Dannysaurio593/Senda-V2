import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { timer } from 'rxjs';
// 1. Importa el componente hijo (verifica que la ruta sea correcta según tus carpetas)
import { ReportePacienteComponent } from '../reporte-paciente/reporte-paciente';

@Component({
  selector: 'app-ficha-de-paciente',
  standalone: true,
  imports: [CommonModule, FormsModule, ReportePacienteComponent], // 2. Añade FormsModule para two-way binding
  templateUrl: './ficha-de-paciente.html',
  styleUrl: './ficha-de-paciente.css',
})
export class FichaDePaciente {
  
  constructor(private cdr: ChangeDetectorRef) {}
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
  
  // Mensaje de confirmación cuando se guarda la ficha
  mensajeGuardado: string = '';
  mostrarMensaje: boolean = false;
  
  // Método que el padre ejecuta cuando el hijo emite el evento
  onFichaGuardada(datos: any) {
    console.log('Evento recibido:', datos); // Debug
    this.mensajeGuardado = `✅ Datos de ${datos.nombrePaciente} guardados exitosamente!`;
    this.mostrarMensaje = true;
    this.cdr.markForCheck(); // Fuerza detección de cambios
    
    // Ocultar el mensaje después de 3.4 segundos (3000ms + 400ms de animación de salida)
    timer(3400).subscribe(() => {
      console.log('Timer terminado, ocultando modal'); // Debug
      this.mostrarMensaje = false;
      this.cdr.markForCheck(); // Fuerza detección de cambios
    });
  }

}
