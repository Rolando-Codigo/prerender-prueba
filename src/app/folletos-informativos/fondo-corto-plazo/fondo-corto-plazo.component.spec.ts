import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoCortoPlazoComponent } from './fondo-corto-plazo.component';

describe('FondoCortoPlazoComponent', () => {
  let component: FondoCortoPlazoComponent;
  let fixture: ComponentFixture<FondoCortoPlazoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FondoCortoPlazoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FondoCortoPlazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
