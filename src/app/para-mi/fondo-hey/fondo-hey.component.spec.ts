import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoHeyComponent } from './fondo-hey.component';

describe('FondoHeyComponent', () => {
  let component: FondoHeyComponent;
  let fixture: ComponentFixture<FondoHeyComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ FondoHeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FondoHeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
