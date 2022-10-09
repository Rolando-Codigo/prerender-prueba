import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {  CentroAyudaQueSemana65Component } from './que-es-semana-6-5.component';

describe(' CentroAyudaQueSemana65Component', () => {
  let component:  CentroAyudaQueSemana65Component;
  let fixture: ComponentFixture< CentroAyudaQueSemana65Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  CentroAyudaQueSemana65Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( CentroAyudaQueSemana65Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
