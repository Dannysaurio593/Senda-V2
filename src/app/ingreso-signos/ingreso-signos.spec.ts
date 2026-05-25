import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoSignos } from './ingreso-signos';

describe('IngresoSignos', () => {
  let component: IngresoSignos;
  let fixture: ComponentFixture<IngresoSignos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngresoSignos],
    }).compileComponents();

    fixture = TestBed.createComponent(IngresoSignos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
