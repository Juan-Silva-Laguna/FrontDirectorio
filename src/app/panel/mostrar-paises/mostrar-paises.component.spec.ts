import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPaisesComponent } from './mostrar-paises.component';

describe('MostrarPaisesComponent', () => {
  let component: MostrarPaisesComponent;
  let fixture: ComponentFixture<MostrarPaisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarPaisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
