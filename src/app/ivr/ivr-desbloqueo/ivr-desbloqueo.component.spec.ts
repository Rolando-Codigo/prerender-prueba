import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IvrDesbloqueoComponent } from './ivr-desbloqueo.component';

describe('IvrDesbloqueoComponent', () => {
  let component: IvrDesbloqueoComponent;
  let fixture: ComponentFixture<IvrDesbloqueoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IvrDesbloqueoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IvrDesbloqueoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
