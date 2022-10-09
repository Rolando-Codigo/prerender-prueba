import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FondosInversionCaratulaComponent } from './caratula-servicios-inversion.component';

describe('FondosInversionCaratulaComponent', () => {
  let component: FondosInversionCaratulaComponent;
  let fixture: ComponentFixture<FondosInversionCaratulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FondosInversionCaratulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FondosInversionCaratulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
