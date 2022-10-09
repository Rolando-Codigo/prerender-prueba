import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegocioSegurosDrsamComponent } from './negocio-seguros-drsam.component';

describe('NegocioSegurosDrsamComponent', () => {
  let component: NegocioSegurosDrsamComponent;
  let fixture: ComponentFixture<NegocioSegurosDrsamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegocioSegurosDrsamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegocioSegurosDrsamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
