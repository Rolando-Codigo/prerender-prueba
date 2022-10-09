import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroAyudaMovimientosCuentasComponent } from './movimientos-cuentas.component';

describe('CentroAyudaMovimientosCuentaComponent', () => {
  let component: CentroAyudaMovimientosCuentasComponent;
  let fixture: ComponentFixture<CentroAyudaMovimientosCuentasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentroAyudaMovimientosCuentasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroAyudaMovimientosCuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
