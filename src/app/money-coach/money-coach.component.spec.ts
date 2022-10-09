import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyCoachComponent } from './money-coach.component';

describe('MoneyCoachComponent', () => {
  let component: MoneyCoachComponent;
  let fixture: ComponentFixture<MoneyCoachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyCoachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
