import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeyPayGoComponent } from './heypaygo.component';

describe('HeyPayGoComponent', () => {
  let component: HeyPayGoComponent;
  let fixture: ComponentFixture<HeyPayGoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeyPayGoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeyPayGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
