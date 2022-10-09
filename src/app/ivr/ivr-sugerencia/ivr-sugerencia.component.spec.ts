import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IvrSugerenciaComponent } from './ivr-sugerencia.component';

describe('IvrSugerenciaComponent', () => {
  let component: IvrSugerenciaComponent;
  let fixture: ComponentFixture<IvrSugerenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IvrSugerenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IvrSugerenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
