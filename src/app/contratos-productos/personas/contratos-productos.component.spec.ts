import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoProductosComponent } from './contratos-productos.component';

describe('ContratoProductosComponent', () => {
  let component: ContratoProductosComponent;
  let fixture: ComponentFixture<ContratoProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratoProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
