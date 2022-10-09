import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroAyudaNegociosResultadosComponent } from './centro-ayuda-negocios-resultados.component';

describe('CentroAyudaNegociosResultadosComponent', () => {
  let component: CentroAyudaNegociosResultadosComponent;
  let fixture: ComponentFixture<CentroAyudaNegociosResultadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentroAyudaNegociosResultadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroAyudaNegociosResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
