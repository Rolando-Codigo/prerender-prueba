import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondusefComponent } from './condusef.component';

describe('CondusefComponent', () => {
  let component: CondusefComponent;
  let fixture: ComponentFixture<CondusefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondusefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondusefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
