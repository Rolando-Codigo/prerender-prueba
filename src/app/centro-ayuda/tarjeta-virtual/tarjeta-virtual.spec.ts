import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroAyudaTarjetaVirtualComponent } from './tarjeta-virtual.component';

describe('CentroAyudaTarjetaVirtualComponent', () => {
  let component: CentroAyudaTarjetaVirtualComponent;
  let fixture: ComponentFixture<CentroAyudaTarjetaVirtualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentroAyudaTarjetaVirtualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroAyudaTarjetaVirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
