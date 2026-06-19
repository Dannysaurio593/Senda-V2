import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportePaciente } from './reporte-paciente';

describe('ReportePaciente', () => {
  let component: ReportePaciente;
  let fixture: ComponentFixture<ReportePaciente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportePaciente],
    }).compileComponents();

    fixture = TestBed.createComponent(ReportePaciente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
