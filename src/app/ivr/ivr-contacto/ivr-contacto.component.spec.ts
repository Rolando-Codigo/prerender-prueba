import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IvrContactoComponent } from './ivr-contacto.component';

describe('IvrContactoComponent', () => {
  let component: IvrContactoComponent;
  let fixture: ComponentFixture<IvrContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IvrContactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IvrContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
