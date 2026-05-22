import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ingreso-signos',
  imports: [CommonModule, FormsModule],
  templateUrl: './ingreso-signos.html',
  styleUrl: './ingreso-signos.css',
})
export class IngresoSignos {
  // Objeto que agrupa todos los signos vitales
  signos = {
    presionArterial: '120/80',
    temperatura: 36.5,
    pulso: 75,
    notasSintomas: ''
  };
}
