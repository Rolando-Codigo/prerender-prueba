import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroAyudaCreditosComponent } from './centro-ayuda-creditos.component';

describe('CentroAyudaCreditosComponent', () => {
  let component: CentroAyudaCreditosComponent;
  let fixture: ComponentFixture<CentroAyudaCreditosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentroAyudaCreditosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroAyudaCreditosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
