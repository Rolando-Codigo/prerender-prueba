import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoMedianoPlazoComponent } from './fondo-mediano-plazo.component';

describe('FondoMedianoPlazoComponent', () => {
  let component: FondoMedianoPlazoComponent;
  let fixture: ComponentFixture<FondoMedianoPlazoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FondoMedianoPlazoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FondoMedianoPlazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
