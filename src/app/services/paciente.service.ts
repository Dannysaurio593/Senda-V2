import { Injectable } from '@angular/core';

// ==========================================
// INTERFAZ: Definición del modelo de datos
// ==========================================
// Especifica la estructura exacta y tipos de datos que debe tener un Paciente.
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
// SERVICIO: Proveedor de Estado Global
// ==========================================
// El decorador @Injectable registra este servicio. Al usar providedIn: 'root',
// Angular crea una única instancia (Singleton) accesible en toda la aplicación.
@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  
  // Almacén de datos privado para evitar modificaciones directas externas
  private paciente: Paciente = {
    nombrePaciente: 'Carlos Eduardo Mendoza',
    codigoExpediente: 'SENDA-2026-8834',
    edad: 35,
    tipoSangre: 'O Positivo (O+)',
    contactoEmergencia: 'María Laura Mendoza (Esposa)',
    telefonoEmergencia: '098 765 4321',
    proximaCita: 'Lunes 25 de Mayo - 10:00 AM'
  };

  // Retorna una copia del objeto paciente usando el operador spread (...)
  // para proteger la referencia original contra mutaciones accidentales.
  getPaciente(): Paciente {
    return { ...this.paciente };
  }

  // Permite actualizar campos específicos del paciente de manera segura,
  // fusionando los nuevos datos parciales con los existentes.
  updatePaciente(nuevosDatos: Partial<Paciente>): void {
    this.paciente = {
      ...this.paciente,
      ...nuevosDatos
    };
  }
}

