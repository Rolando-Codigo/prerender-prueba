import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoProductosNegociosComponent } from './contratos-productos-negocios.component';

describe('ContratoProductosNegociosComponent', () => {
  let component: ContratoProductosNegociosComponent;
  let fixture: ComponentFixture<ContratoProductosNegociosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratoProductosNegociosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoProductosNegociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
