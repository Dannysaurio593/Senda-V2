import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { EstadoCitasComponent } from './estado-citas/estado-citas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Navbar, Footer, EstadoCitasComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'senda';
  showEstadoCitasSection = false;

  constructor(private router: Router) {}

  openAgendarCita() {
    this.showEstadoCitasSection = true;
  }

  openSos() {
    this.showEstadoCitasSection = false;
    this.router.navigate(['/sos']);
  }

  openHome() {
    this.showEstadoCitasSection = false;
    this.router.navigate(['/']);
  }
}

