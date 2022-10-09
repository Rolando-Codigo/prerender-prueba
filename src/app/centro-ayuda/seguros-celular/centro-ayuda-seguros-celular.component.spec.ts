import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroAyudaSegurosCelularComponent } from './centro-ayuda-seguros-celular.component';

describe('CentroAyudaSegurosCelularComponent', () => {
  let component: CentroAyudaSegurosCelularComponent;
  let fixture: ComponentFixture<CentroAyudaSegurosCelularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentroAyudaSegurosCelularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroAyudaSegurosCelularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
