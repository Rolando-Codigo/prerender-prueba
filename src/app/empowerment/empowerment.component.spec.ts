import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpowermentComponent } from './empowerment.component';

describe('EmpowermentComponent', () => {
  let component: EmpowermentComponent;
  let fixture: ComponentFixture<EmpowermentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpowermentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpowermentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
