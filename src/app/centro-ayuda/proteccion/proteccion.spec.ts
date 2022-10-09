import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {  CentroAyudaProteccionComponent } from './proteccion.component';

describe(' CentroAyudaProteccionComponent', () => {
  let component:  CentroAyudaProteccionComponent;
  let fixture: ComponentFixture< CentroAyudaProteccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  CentroAyudaProteccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( CentroAyudaProteccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
