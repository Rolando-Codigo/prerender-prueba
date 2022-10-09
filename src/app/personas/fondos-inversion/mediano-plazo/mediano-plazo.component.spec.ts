import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondosInversionMedianoPlazoComponent } from './mediano-plazo.component';

describe('FondosInversionMedianoPlazoComponent', () => {
  let component: FondosInversionMedianoPlazoComponent;
  let fixture: ComponentFixture<FondosInversionMedianoPlazoComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ FondosInversionMedianoPlazoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FondosInversionMedianoPlazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
