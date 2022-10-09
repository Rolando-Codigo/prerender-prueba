import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasHeyComponent } from './cuentas-hey.component';

describe('CuentasHeyComponent', () => {
  let component: CuentasHeyComponent;
  let fixture: ComponentFixture<CuentasHeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentasHeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasHeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
