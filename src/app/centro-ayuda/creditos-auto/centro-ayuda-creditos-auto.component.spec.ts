import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroAyudaCreditosAutoComponent } from './centro-ayuda-creditos-auto.component';

describe('CentroAyudaCreditosAutoComponent', () => {
  let component: CentroAyudaCreditosAutoComponent;
  let fixture: ComponentFixture<CentroAyudaCreditosAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentroAyudaCreditosAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroAyudaCreditosAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
