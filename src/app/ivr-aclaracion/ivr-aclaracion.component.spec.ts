import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IvrAclaracionComponent } from './ivr-aclaracion.component';

describe('IvrAclaracionComponent', () => {
  let component: IvrAclaracionComponent;
  let fixture: ComponentFixture<IvrAclaracionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IvrAclaracionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IvrAclaracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
