import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaDePaciente } from './ficha-de-paciente';

describe('FichaDePaciente', () => {
  let component: FichaDePaciente;
  let fixture: ComponentFixture<FichaDePaciente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichaDePaciente],
    }).compileComponents();

    fixture = TestBed.createComponent(FichaDePaciente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
