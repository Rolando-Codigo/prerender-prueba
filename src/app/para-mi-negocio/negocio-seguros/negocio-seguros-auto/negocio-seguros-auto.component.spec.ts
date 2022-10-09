import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegocioSegurosAutoComponent } from './negocio-seguros-auto.component';

describe('NegocioSegurosAutoComponent', () => {
  let component: NegocioSegurosAutoComponent;
  let fixture: ComponentFixture<NegocioSegurosAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegocioSegurosAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegocioSegurosAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
