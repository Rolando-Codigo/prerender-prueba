import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegurosApoyoHospitalarioComponent } from './apoyo-hospitalario.component';

describe('SegurosApoyoHospitalarioComponent', () => {
  let component: SegurosApoyoHospitalarioComponent;
  let fixture: ComponentFixture<SegurosApoyoHospitalarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegurosApoyoHospitalarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegurosApoyoHospitalarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
