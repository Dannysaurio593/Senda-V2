import { Component } from '@angular/core';
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
  
  // Objeto que agrupa todos los signos vitales del paciente
  signos = {
    presionArterial: '120/80',   // Vinculado con [(ngModel)] en input
    temperatura: 36.5,            // Vinculado con [(ngModel)] y usado en directivas
    pulso: 75,                    // Frecuencia cardíaca en ppm
    notasSintomas: '',            // Campo de texto para observaciones
    // IMPORTANTE: Colores dinámicos para alertas - seleccionables visualmente
    // Temperatura
    colorTempNormal: '#00A4D3',   // Celeste por defecto (< 38°C)
    colorFiebre: '#d32f2f',       // Rojo por defecto (>= 38°C)
    // Ritmo Cardíaco
    colorTaquicardia: '#d32f2f',  // Rojo por defecto (Pulso > 100)
    colorBradicardia: '#FFA500',  // Naranja por defecto (Pulso < 60)
    colorNormal: '#F4A003'        // Dorado/Azul por defecto (Pulso 60-100)
  };
}
