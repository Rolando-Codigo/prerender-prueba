import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IvrCambioComponent } from './ivr-cambio.component';

describe('IvrCambioComponent', () => {
  let component: IvrCambioComponent;
  let fixture: ComponentFixture<IvrCambioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IvrCambioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IvrCambioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
