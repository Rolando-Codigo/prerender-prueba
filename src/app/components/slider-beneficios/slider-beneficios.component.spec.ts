import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderBeneficiosComponent } from './slider-beneficios.component';

describe('SliderBeneficiosComponent', () => {
  let component: SliderBeneficiosComponent;
  let fixture: ComponentFixture<SliderBeneficiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderBeneficiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderBeneficiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
