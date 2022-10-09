import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoProductosCuentasHeyComponent } from './cuentas-hey-contratos.component';

describe('ContratoProductosCuentasHeyComponent', () => {
  let component: ContratoProductosCuentasHeyComponent;
  let fixture: ComponentFixture<ContratoProductosCuentasHeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratoProductosCuentasHeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoProductosCuentasHeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
