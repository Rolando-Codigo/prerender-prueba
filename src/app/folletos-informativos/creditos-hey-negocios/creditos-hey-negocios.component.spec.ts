import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditosHeyNegocioComponent } from './creditos-hey-negocios.component';

describe('CreditosHeyNegocioComponent', () => {
  let component: CreditosHeyNegocioComponent;
  let fixture: ComponentFixture<CreditosHeyNegocioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditosHeyNegocioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditosHeyNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
