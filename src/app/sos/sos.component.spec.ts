import { TestBed } from '@angular/core/testing';
import { SosComponent } from './sos.component';

describe('SosComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SosComponent],
    }).compileComponents();
  });

  it('should create the SOS component', () => {
    const fixture = TestBed.createComponent(SosComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should open the warning overlay when dispararAlerta is called', () => {
    const fixture = TestBed.createComponent(SosComponent);
    const app = fixture.componentInstance;
    expect(app.mostrarVentana).toBe(false);
    app.dispararAlerta();
    expect(app.mostrarVentana).toBe(true);
    expect(app.checkboxConfirmacion).toBe(false);
  });

  it('should close the warning overlay when cerrarVentana is called', () => {
    const fixture = TestBed.createComponent(SosComponent);
    const app = fixture.componentInstance;
    app.mostrarVentana = true;
    app.cerrarVentana();
    expect(app.mostrarVentana).toBe(false);
  });
});
