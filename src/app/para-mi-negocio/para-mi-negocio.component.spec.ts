import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaMiNegocioComponent } from './para-mi-negocio.component';

describe('ParaMiNegocioComponent', () => {
  let component: ParaMiNegocioComponent;
  let fixture: ComponentFixture<ParaMiNegocioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParaMiNegocioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParaMiNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
