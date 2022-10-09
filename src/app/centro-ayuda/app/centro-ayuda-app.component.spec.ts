import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroAyudaAppComponent } from './centro-ayuda-app.component';

describe('CentroAyudaAppComponent', () => {
  let component: CentroAyudaAppComponent;
  let fixture: ComponentFixture<CentroAyudaAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentroAyudaAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroAyudaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
