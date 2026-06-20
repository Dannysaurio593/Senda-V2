import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Necesario para [(ngModel)] - Two-Way Binding

@Component({
  selector: 'app-ingreso-signos',
  imports: [CommonModule, FormsModule],
  templateUrl: './ingreso-signos.html',
  styleUrl: './ingreso-signos.css',
})
export class IngresoSignos {
  // IMPORTANTE: Two-Way Binding con [(ngModel)]
  // Los datos se sincronizan bidireccionalente:
  // - Cuando el usuario escribe → se actualiza aquí en el componente
  // - Cuando cambia el valor aquí → se actualiza en el input
  // Necesito FormsModule importado para que ngModel funcione
  
  // Variables para la simulación de envío y el ticket digital
  enviando = false;
  progresoTexto = '';
  mostrarModalTicket = false;
  fechaEnvio = '';
  idTransaccion = '';

  // Inyección de ChangeDetectorRef para entornos zoneless
  constructor(private cdr: ChangeDetectorRef) {}

  // Objeto que agrupa todos los signos vitales del paciente
  signos = {
    presionArterial: '120/80',   // Vinculado con [(ngModel)] en input
    temperatura: 36.5,            // Vinculado con [(ngModel)] y usado en directivas
    pulso: 75,                    // Frecuencia cardíaca en ppm
    notasSintomas: '',            // Campo de texto para observaciones
    estadoAnimo: 'bien',          // Estado seleccionado: muy_bien, bien, regular, muy_mal
    // IMPORTANTE: Colores dinámicos para alertas - seleccionables visualmente
    // Presión Arterial
    colorPresionBaja: '#d32f2f',      // Rojo (< 90/60) - ALERTA
    colorPresionNormal: '#00A4D3',    // Celeste (90/60 - 140/90) - NORMAL
    colorPresionAlta: '#d32f2f',      // Rojo (140/90 - 160/100) - ALERTA
    colorPresionMuyAlta: '#d32f2f',   // Rojo (> 160/100) - ALERTA CRÍTICA
    // Temperatura
    colorTempMuyBaja: '#d32f2f',  // Rojo por defecto (Temp < 36°C) - ALERTA
    colorTempNormal: '#00A4D3',   // Celeste por defecto (36-37.5°C) - NORMAL
    colorFiebre: '#d32f2f',       // Rojo por defecto (38-40°C) - ALERTA
    colorTempMuyAlta: '#d32f2f',  // Rojo por defecto (Temp > 40°C) - ALERTA CRÍTICA
    // Ritmo Cardíaco
    colorTaquicardia: '#d32f2f',  // Rojo por defecto (Pulso > 100) - ALERTA
    colorBradicardia: '#d32f2f',  // Rojo por defecto (Pulso < 60) - ALERTA
    colorNormal: '#00A4D3'        // Celeste por defecto (Pulso 60-100) - NORMAL
  };

  // IMPORTANTE: Método para obtener el color del estado de ánimo
  obtenerColorEstadoAnimo(): string {
    switch (this.signos.estadoAnimo) {
      case 'muy_bien':
        return '#4CAF50'; // Verde - Muy bien
      case 'bien':
        return '#8BC34A'; // Verde claro - Bien
      case 'regular':
        return '#FF9800'; // Naranja - Regular
      case 'muy_mal':
        return '#d32f2f'; // Rojo - Muy mal
      default:
        return '#8BC34A';
    }
  }

  // IMPORTANTE: Método para obtener el emoji del estado de ánimo
  obtenerEmojiEstadoAnimo(): string {
    switch (this.signos.estadoAnimo) {
      case 'muy_bien':
        return '😄'; // Muy feliz
      case 'bien':
        return '🙂'; // Sonriendo
      case 'regular':
        return '😐'; // Neutro
      case 'muy_mal':
        return '😟'; // Preocupado
      default:
        return '🙂';
    }
  }

  // IMPORTANTE: Método para obtener el color de presión arterial según rango
  // Parsea "120/80" y determina el estado
  obtenerColorPresion(): string {
    // Parsea el string de presión (ej: "120/80")
    const partes = this.signos.presionArterial.split('/');
    if (partes.length !== 2) return this.signos.colorPresionNormal;
    
    const sistolica = parseInt(partes[0], 10);
    const diastolica = parseInt(partes[1], 10);
    
    // Valida que sean números válidos
    if (isNaN(sistolica) || isNaN(diastolica)) {
      return this.signos.colorPresionNormal;
    }
    
    // Criterios médicos para presión arterial
    // Hipotensión: < 90/60
    if (sistolica < 90 || diastolica < 60) {
      return this.signos.colorPresionBaja;
    }
    // Hipertensión crítica: > 160/100
    else if (sistolica > 160 || diastolica > 100) {
      return this.signos.colorPresionMuyAlta;
    }
    // Hipertensión: 140/90 - 160/100
    else if (sistolica >= 140 || diastolica >= 90) {
      return this.signos.colorPresionAlta;
    }
    // Normal: 90/60 - 140/90
    else {
      return this.signos.colorPresionNormal;
    }
  }

  // IMPORTANTE: Método para obtener el mensaje de alerta de presión
  obtenerMensajePresion(): string {
    const partes = this.signos.presionArterial.split('/');
    if (partes.length !== 2) return '';
    
    const sistolica = parseInt(partes[0], 10);
    const diastolica = parseInt(partes[1], 10);
    
    if (isNaN(sistolica) || isNaN(diastolica)) return '';
    
    if (sistolica < 90 || diastolica < 60) {
      return '(Alerta: Hipotensión)';
    } else if (sistolica > 160 || diastolica > 100) {
      return '(⚠️ Alerta: Hipertensión Crítica - Llamar médico)';
    } else if (sistolica >= 140 || diastolica >= 90) {
      return '(Alerta: Hipertensión)';
    }
    return '';
  }

  // ==========================================
  // METODOS DEL FEEDBACK DE ENVIO (TICKET CLINICO)
  // ==========================================

  enviarReporte() {
    if (this.enviando) return;
    this.enviando = true;
    
    // Establecer fecha de envío formateada
    this.fechaEnvio = new Date().toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    
    // Generar un ID de transacción aleatorio/seguro
    const randomHex = Math.random().toString(16).substring(2, 14).toUpperCase();
    this.idTransaccion = `SND-${new Date().getFullYear()}-${randomHex}`;

    // Simular el proceso en cascada
    this.progresoTexto = 'Preparando reporte clínico...';
    this.cdr.markForCheck();
    
    setTimeout(() => {
      this.progresoTexto = 'Cifrando signos vitales (SHA-256)...';
      this.cdr.markForCheck();
      
      setTimeout(() => {
        this.progresoTexto = 'Sincronizando con Senda Clínicas...';
        this.cdr.markForCheck();
        
        setTimeout(() => {
          this.enviando = false;
          this.progresoTexto = '';
          this.mostrarModalTicket = true;
          this.cdr.markForCheck();
        }, 800);
        
      }, 700);
      
    }, 600);
  }

  cerrarModalTicket() {
    this.mostrarModalTicket = false;
    this.cdr.markForCheck();
  }

  obtenerNivelRiesgo(): 'estable' | 'atencion' | 'critico' {
    const temp = this.signos.temperatura;
    const pulso = this.signos.pulso;
    const partes = this.signos.presionArterial.split('/');
    
    let sistolica = 120;
    let diastolica = 80;
    let presionValida = false;
    
    if (partes.length === 2) {
      sistolica = parseInt(partes[0], 10);
      diastolica = parseInt(partes[1], 10);
      if (!isNaN(sistolica) && !isNaN(diastolica)) {
        presionValida = true;
      }
    }

    // Rangos críticos
    const tempCritica = temp > 40 || temp < 35.5;
    const pulsoCritico = pulso > 120 || pulso < 50;
    const presionCritica = presionValida && (sistolica > 160 || diastolica > 100 || sistolica < 90 || diastolica < 60);

    if (tempCritica || pulsoCritico || presionCritica) {
      return 'critico';
    }

    // Rangos de atención/precaución
    const tempAtencion = (temp >= 38 && temp <= 40) || (temp >= 35.5 && temp < 36);
    const pulsoAtencion = (pulso > 100 && pulso <= 120) || (pulso >= 50 && pulso < 60);
    const presionAtencion = presionValida && (sistolica >= 140 || diastolica >= 90);
    const animoCritico = this.signos.estadoAnimo === 'muy_mal';

    if (tempAtencion || pulsoAtencion || presionAtencion || animoCritico) {
      return 'atencion';
    }

    return 'estable';
  }

  obtenerMensajeRiesgo(): string {
    const riesgo = this.obtenerNivelRiesgo();
    if (riesgo === 'critico') {
      return '🚨 Tus signos vitales actuales requieren evaluación médica prioritaria. Senda ha notificado a tu médico de cabecera y el equipo de asistencia de guardia está al tanto de tu estado.';
    } else if (riesgo === 'atencion') {
      return '⚠️ Hemos detectado variaciones menores fuera de tus rangos normales. Mantente en reposo, mantén una buena hidratación y vuelve a tomarte los signos en 30 minutos.';
    }
    return '💚 ¡Excelente! Todos tus parámetros vitales se encuentran dentro del rango de estabilidad clínica recomendado. Tu reporte ha sido archivado exitosamente.';
  }
}
