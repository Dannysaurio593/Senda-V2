import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  @Input() seccionActiva: string = 'ficha';
  @Output() alCambiarPantalla = new EventEmitter<string>();
  
  isDropdownOpen = false;
  private closeTimeout: any;

  mostrarHome() {
    this.alCambiarPantalla.emit('home');
  }

  mostrarFicha() {
    this.alCambiarPantalla.emit('ficha');
  }

  mostrarSignos() {
    this.alCambiarPantalla.emit('signos');
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  closeDropdownWithDelay() {
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
    }
    this.closeTimeout = setTimeout(() => {
      this.closeDropdown();
    }, 200);
  }
}
