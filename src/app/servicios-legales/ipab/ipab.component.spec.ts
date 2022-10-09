import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpabComponent } from './ipab.component';

describe('IpabComponent', () => {
  let component: IpabComponent;
  let fixture: ComponentFixture<IpabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
