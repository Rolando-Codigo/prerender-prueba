import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimuladorAutoComponent } from './simulador-auto.component';

describe('SimuladorAutoComponent', () => {
  let component: SimuladorAutoComponent;
  let fixture: ComponentFixture<SimuladorAutoComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ SimuladorAutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimuladorAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
