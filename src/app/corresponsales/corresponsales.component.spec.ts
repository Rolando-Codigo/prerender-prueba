import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorresponsalesComponent } from './corresponsales.component';

describe('CorresponsalesComponent', () => {
  let component: CorresponsalesComponent;
  let fixture: ComponentFixture<CorresponsalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorresponsalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorresponsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
