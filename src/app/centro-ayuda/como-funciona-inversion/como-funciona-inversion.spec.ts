import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {  CentroAyudaInversionHeyComponent } from './como-funciona-inversion.component';

describe(' CentroAyudaInversionHeyComponent', () => {
  let component:  CentroAyudaInversionHeyComponent;
  let fixture: ComponentFixture< CentroAyudaInversionHeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  CentroAyudaInversionHeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( CentroAyudaInversionHeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
