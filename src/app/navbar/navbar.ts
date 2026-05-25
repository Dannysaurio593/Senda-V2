import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar {
  @Output() agendarCita = new EventEmitter<void>();
  @Output() openSos = new EventEmitter<void>();
  @Output() navHome = new EventEmitter<void>();

  isDropdownOpen = false;
  private closeTimeout: any;

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

  onAgendarCita(event: Event) {
    event.preventDefault();
    this.agendarCita.emit();
  }

  onHome(event: Event) {
    event.preventDefault();
    this.navHome.emit();
  }

  onSos(event: Event) {
    event.preventDefault();
    this.openSos.emit();
  }
}
