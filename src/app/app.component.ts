import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { EstadoCitasComponent } from './estado-citas/estado-citas.component';
import { SosComponent } from './sos/sos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Navbar, Footer, EstadoCitasComponent, SosComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'senda';
  showEstadoCitasSection = false;

  openAgendarCita() {
    this.showEstadoCitasSection = true;
  }
}

