import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroAyudaNegociosComponent } from './centro-ayuda-negocios.component';

describe('CentroAyudaNegociosComponent', () => {
  let component: CentroAyudaNegociosComponent;
  let fixture: ComponentFixture<CentroAyudaNegociosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentroAyudaNegociosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroAyudaNegociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
