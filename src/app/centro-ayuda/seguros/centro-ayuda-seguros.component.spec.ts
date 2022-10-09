import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroAyudaSegurosComponent } from './centro-ayuda-seguros.component';

describe('CentroAyudaSegurosComponent', () => {
  let component: CentroAyudaSegurosComponent;
  let fixture: ComponentFixture<CentroAyudaSegurosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentroAyudaSegurosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroAyudaSegurosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
