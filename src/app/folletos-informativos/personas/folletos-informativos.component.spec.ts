import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FolletosInformativosComponent } from './folletos-informativos.component';

describe('FolletosInformativosComponent', () => {
  let component: FolletosInformativosComponent;
  let fixture: ComponentFixture<FolletosInformativosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FolletosInformativosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolletosInformativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
