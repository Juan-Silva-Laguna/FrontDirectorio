import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarCiudadesComponent } from './mostrar-ciudades.component';

describe('MostrarCiudadesComponent', () => {
  let component: MostrarCiudadesComponent;
  let fixture: ComponentFixture<MostrarCiudadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarCiudadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarCiudadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
