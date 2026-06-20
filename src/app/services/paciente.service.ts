import { Injectable } from '@angular/core';

// ==========================================
// INTERFAZ: Definición del modelo de datos
// ==========================================
export interface Paciente {
  nombrePaciente: string;
  codigoExpediente: string;
  edad: number;
  tipoSangre: string;
  contactoEmergencia: string;
  telefonoEmergencia: string;
  proximaCita: string;
}

// ==========================================
// SERVICIO: Proveedor de Estado Global y LocalStorage
// ==========================================
@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  
  // Datos predeterminados del paciente en caso de no haber datos guardados
  private defaultPaciente: Paciente = {
    nombrePaciente: 'Carlos Eduardo Mendoza',
    codigoExpediente: 'SENDA-2026-8834',
    edad: 35,
    tipoSangre: 'O Positivo (O+)',
    contactoEmergencia: 'María Laura Mendoza (Esposa)',
    telefonoEmergencia: '098 765 4321',
    proximaCita: 'Viernes 3 de Julio de 2026 - 10H00'
  };

  private paciente: Paciente;

  constructor() {
    // Al inicializar el servicio, cargamos los datos persistidos
    this.paciente = this.cargarDeStorage();
  }

  // Carga los datos del LocalStorage de manera segura
  // (El chequeo de typeof window evita errores si Angular corre en SSR/Servidor)
  private cargarDeStorage(): Paciente {
    if (typeof window !== 'undefined' && window.localStorage) {
      const datosGuardados = localStorage.getItem('senda_paciente');
      if (datosGuardados) {
        try {
          return JSON.parse(datosGuardados);
        } catch (e) {
          // Si el JSON guardado está corrupto por algún motivo, regresamos el default
        }
      }
    }
    return { ...this.defaultPaciente };
  }

  // Retorna una copia del objeto paciente
  getPaciente(): Paciente {
    return { ...this.paciente };
  }

  // Actualiza los campos y los guarda inmediatamente en el LocalStorage
  updatePaciente(nuevosDatos: Partial<Paciente>): void {
    this.paciente = {
      ...this.paciente,
      ...nuevosDatos
    };

    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('senda_paciente', JSON.stringify(this.paciente));
    }
  }
}


