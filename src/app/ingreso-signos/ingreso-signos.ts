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
  // Variables que se amarrarán a los inputs (Two-Way Data Binding)
  presionArterial: string = '120/80';
  temperatura: number = 36.5;
  pulso: number = 75;
  notasSintomas: string = '';
}
