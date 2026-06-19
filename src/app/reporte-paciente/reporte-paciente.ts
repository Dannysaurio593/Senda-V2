import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reporte-paciente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reporte-paciente.html',
  styleUrl: './reporte-paciente.css'
})
export class ReportePacienteComponent {
  
  // @Input propiedades que reciben del componente padre
  @Input() nombrePaciente: string = '';
  @Input() codigoExpediente: string = '';
  @Input() edad: number = 0;
  @Input() tipoSangre: string = '';
  @Input() contactoEmergencia: string = '';
  @Input() telefonoEmergencia: string = '';
  @Input() fechaActual: string = '';
  @Input() proximaCita: string = '';
  @Input() colorEdadAlta: string = '#d32f2f';
  @Input() colorEdadNormal: string = '#2E5481';
  @Input() colorSangreOPositivo: string = '#ff6b6b';
  @Input() colorSangreOtros: string = '#d32f2f';
  
  // @Output emite evento cuando se guarda la ficha
  @Output() fichaguardada = new EventEmitter<any>();
  
  // Método para guardar la ficha y emitir evento
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
    // Emite el evento con los datos
    this.fichaguardada.emit(datosGuardados);
  }

}