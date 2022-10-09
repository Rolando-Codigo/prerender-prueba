import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaAppComponent } from './cta-app.component';

describe('CtaAppComponent', () => {
  let component: CtaAppComponent;
  let fixture: ComponentFixture<CtaAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtaAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
