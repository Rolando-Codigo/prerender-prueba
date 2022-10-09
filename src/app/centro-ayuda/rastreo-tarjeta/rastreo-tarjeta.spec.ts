import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroAyudaRastreoTarjetaComponent } from './rastreo-tarjeta.component';

describe('CentroAyudaRastreoTarjetaComponent', () => {
  let component: CentroAyudaRastreoTarjetaComponent;
  let fixture: ComponentFixture<CentroAyudaRastreoTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentroAyudaRastreoTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroAyudaRastreoTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
