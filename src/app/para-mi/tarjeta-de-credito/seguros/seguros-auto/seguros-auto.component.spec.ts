import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegurosAutoComponent } from './seguros-auto.component';

describe('AutoComponent', () => {
  let component: SegurosAutoComponent;
  let fixture: ComponentFixture<SegurosAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegurosAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegurosAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
