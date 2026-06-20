import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { timer } from 'rxjs';
import { ReportePacienteComponent } from '../reporte-paciente/reporte-paciente';
import { PacienteService } from '../services/paciente.service';

// ==========================================
// COMPONENTE PADRE: Ficha de Paciente
// ==========================================
// Este componente actúa como contenedor principal (Padre).
// 1. Obtiene la información del PacienteService al inicializarse.
// 2. Realiza two-way data binding ([(ngModel)]) en su formulario HTML.
// 3. Envía los datos hacia el componente Hijo (<app-reporte-paciente>) usando @Input.
// 4. Escucha eventos emitidos por el Hijo usando @Output (fichaguardada).
@Component({
  selector: 'app-ficha-de-paciente',
  standalone: true,
  imports: [CommonModule, FormsModule, ReportePacienteComponent],
  templateUrl: './ficha-de-paciente.html',
  styleUrl: './ficha-de-paciente.css',
})
export class FichaDePaciente implements OnInit {
  
  // ==========================================
  // PROPIEDADES / ESTADO LOCAL
  // ==========================================
  nombrePaciente: string = '';
  codigoExpediente: string = '';
  edad: number = 0;
  tipoSangre: string = '';
  
  contactoEmergencia: string = '';
  telefonoEmergencia: string = '';
  
  fechaActual: string = '';
  proximaCita: string = '';

  // Configuración de colores usada dinámicamente en directivas [ngClass]/[ngStyle] del template
  colorEdadAlta: string = '#d32f2f';        
  colorEdadNormal: string = '#2E5481';      
  colorSangreOPositivo: string = '#ff6b6b'; 
  colorSangreOtros: string = '#d32f2f';     
  
  // Estado para el modal de confirmación
  mensajeGuardado: string = '';
  mostrarMensaje: boolean = false;
  
  // ==========================================
  // INYECCIÓN DE DEPENDENCIAS
  // ==========================================
  // ChangeDetectorRef: Fuerza a Angular a verificar cambios en la vista si ocurren asíncronamente.
  // PacienteService: Proveedor global de la información compartida del paciente.
  constructor(
    private cdr: ChangeDetectorRef,
    private pacienteService: PacienteService
  ) {}
  
  // ==========================================
  // CICLO DE VIDA: Inicialización del Componente
  // ==========================================
  ngOnInit() {
    // 1. Recuperamos los datos del paciente almacenados en el servicio global.
    const datos = this.pacienteService.getPaciente();
    this.nombrePaciente = datos.nombrePaciente;
    this.codigoExpediente = datos.codigoExpediente;
    this.edad = datos.edad;
    this.tipoSangre = datos.tipoSangre;
    this.contactoEmergencia = datos.contactoEmergencia;
    this.telefonoEmergencia = datos.telefonoEmergencia;
    this.proximaCita = datos.proximaCita;

    // 2. Establecemos la fecha de hoy con el formato local en español.
    this.fechaActual = new Date().toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }
  
  // ==========================================
  // MANEJADOR DE EVENTO (@Output)
  // ==========================================
  // Este método responde cuando el componente Hijo (<app-reporte-paciente>)
  // emite el evento 'fichaguardada'. Recibe los datos y los envía al servicio.
  onFichaGuardada(datos: any) {
    // 1. Guardamos de forma persistente los nuevos datos en el servicio global
    this.pacienteService.updatePaciente(datos);

    // 2. Desplegamos el aviso en pantalla
    this.mensajeGuardado = `✅ Datos de ${datos.nombrePaciente} guardados exitosamente!`;
    this.mostrarMensaje = true;
    this.cdr.markForCheck(); // Fuerza detección de cambios
    
    // 3. Ocultamos el modal automáticamente después de 3 segundos
    timer(3000).subscribe(() => {
      this.mostrarMensaje = false;
      this.cdr.markForCheck(); // Fuerza detección de cambios
    });
  }
}


