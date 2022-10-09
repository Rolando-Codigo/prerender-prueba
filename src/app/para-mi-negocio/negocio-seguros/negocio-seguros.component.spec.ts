import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegocioSegurosComponent } from './negocio-seguros.component';

describe('NegocioSegurosComponent', () => {
  let component: NegocioSegurosComponent;
  let fixture: ComponentFixture<NegocioSegurosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegocioSegurosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegocioSegurosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
