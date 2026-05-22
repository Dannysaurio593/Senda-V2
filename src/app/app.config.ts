import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  
  checkboxConfirmacion: boolean = false;
  mostrarVentana: boolean = false;

  dispararAlerta() {
    this.mostrarVentana = true;
    this.checkboxConfirmacion = false;
  }

  cerrarVentana() {
    this.mostrarVentana = false;
  }
  
}