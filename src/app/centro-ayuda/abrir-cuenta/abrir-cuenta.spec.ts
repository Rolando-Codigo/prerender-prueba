import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroAyudaAbrirCuentaComponent } from './abrir-cuenta.component';

describe('CentroAyudaAbrirCuentaComponent', () => {
  let component: CentroAyudaAbrirCuentaComponent;
  let fixture: ComponentFixture<CentroAyudaAbrirCuentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentroAyudaAbrirCuentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroAyudaAbrirCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
