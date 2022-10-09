import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoBasicoComponent } from './fondo-basico.component';

describe('FondoBasicoComponent', () => {
  let component: FondoBasicoComponent;
  let fixture: ComponentFixture<FondoBasicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FondoBasicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FondoBasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
