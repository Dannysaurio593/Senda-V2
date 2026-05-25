import { Component } from '@angular/core';

@Component({
  selector: 'app-sos',
  standalone: true,
  templateUrl: './sos.component.html',
  styleUrls: ['./sos.component.css'],
})
export class SosComponent {
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
