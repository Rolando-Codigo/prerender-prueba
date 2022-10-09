import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasHeyNegocioComponent } from './cuentas-hey-negocios.component';

describe('CuentasHeyNegocioComponent', () => {
  let component: CuentasHeyNegocioComponent;
  let fixture: ComponentFixture<CuentasHeyNegocioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentasHeyNegocioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasHeyNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
