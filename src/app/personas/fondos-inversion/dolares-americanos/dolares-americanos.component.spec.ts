import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondosDolaresAmericanosComponent } from './dolares-americanos.component';

describe('FondosDolaresAmericanosComponent', () => {
  let component: FondosDolaresAmericanosComponent;
  let fixture: ComponentFixture<FondosDolaresAmericanosComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ FondosDolaresAmericanosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FondosDolaresAmericanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
