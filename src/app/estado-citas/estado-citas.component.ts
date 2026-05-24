import { Component } from '@angular/core';

@Component({
  selector: 'app-estado-citas',
  standalone: true,
  templateUrl: './estado-citas.component.html',
  styleUrls: ['./estado-citas.component.css'],
})
export class EstadoCitasComponent {
  estadoCita = 'En revisión';
  colorEstado = '#220a81';

  cambiarEstado(nuevoEstado: string) {
    this.estadoCita = nuevoEstado;

    if (nuevoEstado === 'Aprobada') {
      this.colorEstado = '#198754';
    } else if (nuevoEstado === 'Pendiente') {
      this.colorEstado = '#ffc107';
    } else if (nuevoEstado === 'Cancelada') {
      this.colorEstado = '#dc3545';
    }
  }
}
