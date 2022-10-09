import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {  CentroAyudaNumeroCuentaComponent } from './numero-cuenta.component';

describe(' CentroAyudaNumeroCuentaComponent', () => {
  let component:  CentroAyudaNumeroCuentaComponent;
  let fixture: ComponentFixture< CentroAyudaNumeroCuentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  CentroAyudaNumeroCuentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( CentroAyudaNumeroCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
