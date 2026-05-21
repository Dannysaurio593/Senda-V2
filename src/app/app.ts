import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { FichaDePaciente } from './ficha-de-paciente/ficha-de-paciente';
import {IngresoSignos} from './ingreso-signos/ingreso-signos';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, Navbar, Footer, FichaDePaciente, IngresoSignos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Senda');
  // Esta variable controlará qué componente está activo
  seccionActiva: string = 'home';
}
