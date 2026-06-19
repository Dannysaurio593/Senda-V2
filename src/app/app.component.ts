import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  // Importamos únicamente RouterOutlet para el enrutamiento dinámico, y los componentes estáticos globales (Navbar, Footer).
  // Se elimina EstadoCitasComponent porque ahora se cargará dinámicamente mediante el enrutador.
  imports: [CommonModule, RouterOutlet, Navbar, Footer],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'senda';

  // La gestión de las vistas ahora es responsabilidad exclusiva del Router de Angular mediante la URL.
  // Se han eliminado las funciones de eventos y variables booleanas de visualización condicional.
}

