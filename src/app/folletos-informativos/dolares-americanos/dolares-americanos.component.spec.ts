import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoDolaresAmericanosComponent } from './dolares-americanos.component';

describe('FondoDolaresAmericanosComponent', () => {
  let component: FondoDolaresAmericanosComponent;
  let fixture: ComponentFixture<FondoDolaresAmericanosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FondoDolaresAmericanosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FondoDolaresAmericanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
