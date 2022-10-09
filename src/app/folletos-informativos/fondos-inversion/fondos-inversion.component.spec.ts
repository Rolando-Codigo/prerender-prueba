import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FondosInversionLegalesComponent } from './fondos-inversion.component';

describe('FondosInversionLegalesComponent', () => {
  let component: FondosInversionLegalesComponent;
  let fixture: ComponentFixture<FondosInversionLegalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FondosInversionLegalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FondosInversionLegalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
