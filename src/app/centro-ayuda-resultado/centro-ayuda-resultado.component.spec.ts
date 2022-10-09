import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroAyudaResultadoComponent } from './centro-ayuda-resultado.component';

describe('CentroAyudaResultadoComponent', () => {
  let component: CentroAyudaResultadoComponent;
  let fixture: ComponentFixture<CentroAyudaResultadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentroAyudaResultadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroAyudaResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
