import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroAyudaInversionComponent } from './centro-ayuda-inversion.component';

describe('CentroAyudaInversionComponent', () => {
  let component: CentroAyudaInversionComponent;
  let fixture: ComponentFixture<CentroAyudaInversionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentroAyudaInversionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroAyudaInversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
