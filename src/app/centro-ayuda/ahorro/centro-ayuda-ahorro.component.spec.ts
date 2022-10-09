import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroAyudaAhorroComponent } from './centro-ayuda-ahorro.component';

describe('CentroAyudaAhorroComponent', () => {
  let component: CentroAyudaAhorroComponent;
  let fixture: ComponentFixture<CentroAyudaAhorroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentroAyudaAhorroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroAyudaAhorroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
