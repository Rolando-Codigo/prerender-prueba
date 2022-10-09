import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroAyudaTarjetaCreditoComponent } from './centro-ayuda-tarjeta-credito.component';

describe('CentroAyudaTarjetaCreditoComponent', () => {
  let component: CentroAyudaTarjetaCreditoComponent;
  let fixture: ComponentFixture<CentroAyudaTarjetaCreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentroAyudaTarjetaCreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroAyudaTarjetaCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
