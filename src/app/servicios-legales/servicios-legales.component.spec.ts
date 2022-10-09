import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosLegalesComponent } from './servicios-legales.component';

describe('ServiciosLegalesComponent', () => {
  let component: ServiciosLegalesComponent;
  let fixture: ComponentFixture<ServiciosLegalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosLegalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosLegalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
