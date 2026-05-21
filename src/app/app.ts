import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { FichaDePaciente } from './ficha-de-paciente/ficha-de-paciente';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, FichaDePaciente],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Senda');
}
