import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreOBDNegociosComponent } from './pre-obd-negocios.component';

describe('PreOBDNegociosComponent', () => {
  let component: PreOBDNegociosComponent;
  let fixture: ComponentFixture<PreOBDNegociosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreOBDNegociosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreOBDNegociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
