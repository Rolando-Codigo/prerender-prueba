import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IvrFallasComponent } from './ivr-fallas.component';

describe('IvrFallasComponent', () => {
  let component: IvrFallasComponent;
  let fixture: ComponentFixture<IvrFallasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IvrFallasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IvrFallasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
