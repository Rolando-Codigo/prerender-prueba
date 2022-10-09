import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {  CentroAyudaSemana65Component } from './semana-6-5.component';

describe(' CentroAyudaSemana65Component', () => {
  let component:  CentroAyudaSemana65Component;
  let fixture: ComponentFixture< CentroAyudaSemana65Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  CentroAyudaSemana65Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( CentroAyudaSemana65Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
