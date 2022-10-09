import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditoAutoComponent } from './auto.component';

describe('CreditoAutoComponent', () => {
  let component: CreditoAutoComponent;
  let fixture: ComponentFixture<CreditoAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditoAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditoAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
