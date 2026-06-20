import { Component } from '@angular/core';
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
}

