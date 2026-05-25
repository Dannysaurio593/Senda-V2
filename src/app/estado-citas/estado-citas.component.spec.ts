import { TestBed } from '@angular/core/testing';
import { EstadoCitasComponent } from './estado-citas.component';

describe('EstadoCitasComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadoCitasComponent],
    }).compileComponents();
  });

  it('should create the estado de citas component', () => {
    const fixture = TestBed.createComponent(EstadoCitasComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should update estadoCita when cambiarEstado is called', () => {
    const fixture = TestBed.createComponent(EstadoCitasComponent);
    const app = fixture.componentInstance;
    app.cambiarEstado('Aprobada');
    expect(app.estadoCita).toBe('Aprobada');
    expect(app.colorEstado).toBe('#198754');
  });
});
