import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoLargoPlazoComponent } from './fondo-largo-plazo.component';

describe('FondoLargoPlazoComponent', () => {
  let component: FondoLargoPlazoComponent;
  let fixture: ComponentFixture<FondoLargoPlazoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FondoLargoPlazoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FondoLargoPlazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
