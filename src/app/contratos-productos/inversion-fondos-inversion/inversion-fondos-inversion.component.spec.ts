import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InversionFondosInversionComponent } from './inversion-fondos-inversion.component';

describe('InversionFondosInversionComponent', () => {
  let component: InversionFondosInversionComponent;
  let fixture: ComponentFixture<InversionFondosInversionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InversionFondosInversionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InversionFondosInversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
