import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreOBDTarjetaCreditoComponent } from './pre-obd-tdc-you.component';

describe('PreOBDTarjetaCreditoComponent', () => {
  let component: PreOBDTarjetaCreditoComponent;
  let fixture: ComponentFixture<PreOBDTarjetaCreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreOBDTarjetaCreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreOBDTarjetaCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
