import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FondosInversionProspectosComponent } from './fondos-inversion-prospectos.component';

describe('FondosInversionProspectosComponent', () => {
  let component: FondosInversionProspectosComponent;
  let fixture: ComponentFixture<FondosInversionProspectosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FondosInversionProspectosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FondosInversionProspectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
