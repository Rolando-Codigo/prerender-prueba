import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondosInversionLargoPlazoComponent } from './largo-plazo.component';

describe('FondosInversionLargoPlazoComponent', () => {
  let component: FondosInversionLargoPlazoComponent;
  let fixture: ComponentFixture<FondosInversionLargoPlazoComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ FondosInversionLargoPlazoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FondosInversionLargoPlazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
