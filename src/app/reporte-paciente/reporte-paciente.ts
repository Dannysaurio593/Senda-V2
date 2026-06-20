import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

// ==========================================
// COMPONENTE HIJO: Reporte Paciente
// ==========================================
// Este componente actúa como presentador (Hijo).
// 1. Recibe información desde el Padre con el decorador @Input().
// 2. Muestra los datos de manera formateada en su template HTML.
// 3. Notifica al Padre cuando el usuario hace click en guardar,
//    emitiendo un evento estructurado con @Output() y EventEmitter.
@Component({
  selector: 'app-reporte-paciente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reporte-paciente.html',
  styleUrl: './reporte-paciente.css'
})
export class ReportePacienteComponent {
  
  // ==========================================
  // ENTRADAS (@Input): Datos recibidos del Padre
  // ==========================================
  @Input() nombrePaciente: string = '';
  @Input() codigoExpediente: string = '';
  @Input() edad: number = 0;
  @Input() tipoSangre: string = '';
  @Input() contactoEmergencia: string = '';
  @Input() telefonoEmergencia: string = '';
  @Input() fechaActual: string = '';
  @Input() proximaCita: string = '';
  
  // Colores dinámicos del diseño también expuestos como Inputs
  @Input() colorEdadAlta: string = '#d32f2f';
  @Input() colorEdadNormal: string = '#2E5481';
  @Input() colorSangreOPositivo: string = '#ff6b6b';
  @Input() colorSangreOtros: string = '#d32f2f';
  
  // ==========================================
  // SALIDAS (@Output): Eventos emitidos al Padre
  // ==========================================
  // EventEmitter es la clase que permite crear y despachar eventos personalizados.
  @Output() fichaguardada = new EventEmitter<any>();
  
  // ==========================================
  // MÉTODOS DEL COMPONENTE
  // ==========================================
  // Se ejecuta al hacer click en el botón de guardar en el HTML del hijo.
  // Empaqueta las propiedades actuales recibidas y las despacha al Padre.
  guardarFicha() {
    const datosGuardados = {
      nombrePaciente: this.nombrePaciente,
      codigoExpediente: this.codigoExpediente,
      edad: this.edad,
      tipoSangre: this.tipoSangre,
      contactoEmergencia: this.contactoEmergencia,
      telefonoEmergencia: this.telefonoEmergencia,
      fechaActual: this.fechaActual,
      proximaCita: this.proximaCita
    };
    
    // Emitimos el evento hacia el Padre con la carga de datos
    this.fichaguardada.emit(datosGuardados);
  }

}