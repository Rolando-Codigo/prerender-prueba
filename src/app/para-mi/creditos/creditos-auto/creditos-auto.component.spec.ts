import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditosAutoComponent } from './creditos-auto.component';

describe('AutoComponent', () => {
  let component: CreditosAutoComponent;
  let fixture: ComponentFixture<CreditosAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditosAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditosAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
