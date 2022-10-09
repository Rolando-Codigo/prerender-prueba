import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroAyudaConsultaVirtualComponent  } from './centro-ayuda-apoyo-hospitalario-consulta-virtual.component';

describe('CentroAyudaConsultaVirtualComponent ', () => {
  let component: CentroAyudaConsultaVirtualComponent ;
  let fixture: ComponentFixture<CentroAyudaConsultaVirtualComponent >;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentroAyudaConsultaVirtualComponent  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroAyudaConsultaVirtualComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
