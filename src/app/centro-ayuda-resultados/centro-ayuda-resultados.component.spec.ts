import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroAyudaResultadosComponent } from './centro-ayuda-resultados.component';

describe('CentroAyudaResultadosComponent', () => {
  let component: CentroAyudaResultadosComponent;
  let fixture: ComponentFixture<CentroAyudaResultadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentroAyudaResultadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroAyudaResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
