import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { FichaDePaciente } from './ficha-de-paciente/ficha-de-paciente';
import {IngresoSignos} from './ingreso-signos/ingreso-signos';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Navbar, Footer, FichaDePaciente, IngresoSignos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('Senda');
  
  // IMPORTANTE: Property que controla qué componente se muestra en la pantalla
  // Esta variable es fundamental para la navegación de la SPA
  // Se usa en el template con [ngSwitch] para cambiar dinámicamente entre vistas
  // Persistencia: se guarda en localStorage para que no se pierda al editar código
  seccionActiva: string = 'home';
  
  ngOnInit() {
    // Al cargar el componente, recupera la última sección guardada en localStorage
    // Si no hay nada guardado, usa 'home' como valor por defecto
    const seccionGuardada = localStorage.getItem('seccionActiva');
    if (seccionGuardada) {
      this.seccionActiva = seccionGuardada;
    }
  }
  
  // Este método se ejecuta cuando el navbar emite un evento de cambio de sección
  cambiarSeccion(nuevaSeccion: string) {
    this.seccionActiva = nuevaSeccion;
    // Guarda la nueva sección en localStorage para persistencia
    localStorage.setItem('seccionActiva', nuevaSeccion);
  }
}
