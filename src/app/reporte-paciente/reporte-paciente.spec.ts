import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportePacienteComponent } from './reporte-paciente';

describe('ReportePacienteComponent', () => {
  let component: ReportePacienteComponent;
  let fixture: ComponentFixture<ReportePacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportePacienteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReportePacienteComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
