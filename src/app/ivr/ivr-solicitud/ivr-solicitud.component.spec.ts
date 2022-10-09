import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IvrSolicitudComponent } from './ivr-solicitud.component';

describe('IvrSolicitudComponent', () => {
  let component: IvrSolicitudComponent;
  let fixture: ComponentFixture<IvrSolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IvrSolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IvrSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
