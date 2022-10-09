import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroAyudaVideotutorialesComponent } from './videotutoriales.component';

describe('CentroAyudaVideotutorialesComponent', () => {
  let component: CentroAyudaVideotutorialesComponent;
  let fixture: ComponentFixture<CentroAyudaVideotutorialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentroAyudaVideotutorialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroAyudaVideotutorialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
