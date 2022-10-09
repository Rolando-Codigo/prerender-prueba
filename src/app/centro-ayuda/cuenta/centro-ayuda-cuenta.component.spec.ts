import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroAyudaCuentaComponent } from './centro-ayuda-cuenta.component';

describe('CentroAyudaCuentaComponent', () => {
  let component: CentroAyudaCuentaComponent;
  let fixture: ComponentFixture<CentroAyudaCuentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentroAyudaCuentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroAyudaCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
