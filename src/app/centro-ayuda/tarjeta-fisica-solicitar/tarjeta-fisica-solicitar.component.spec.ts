import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaFisicaSolicitarComponent } from './tarjeta-fisica-solicitar.component';

describe('TarjetaFisicaSolicitarComponent', () => {
  let component: TarjetaFisicaSolicitarComponent;
  let fixture: ComponentFixture<TarjetaFisicaSolicitarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaFisicaSolicitarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaFisicaSolicitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
