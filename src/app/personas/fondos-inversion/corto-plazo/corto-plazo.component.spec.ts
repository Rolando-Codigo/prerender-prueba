import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondosInversionCortoPlazoComponent } from './fondos-inversion-corto-plazo.component';

describe('FondosInversionCortoPlazoComponent', () => {
  let component: FondosInversionCortoPlazoComponent;
  let fixture: ComponentFixture<FondosInversionCortoPlazoComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ FondosInversionCortoPlazoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FondosInversionCortoPlazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
