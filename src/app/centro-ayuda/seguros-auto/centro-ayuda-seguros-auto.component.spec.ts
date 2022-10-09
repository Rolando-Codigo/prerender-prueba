import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroAyudaSegurosAutoComponent } from './centro-ayuda-seguros-auto.component';

describe('CentroAyudaSegurosAutoComponent', () => {
  let component: CentroAyudaSegurosAutoComponent;
  let fixture: ComponentFixture<CentroAyudaSegurosAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentroAyudaSegurosAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroAyudaSegurosAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
