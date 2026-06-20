import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteService, Paciente } from '../services/paciente.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home implements OnInit {
  paciente: Paciente | null = null;

  constructor(private pacienteService: PacienteService) {}

  ngOnInit() {
    this.paciente = this.pacienteService.getPaciente();
  }
}
