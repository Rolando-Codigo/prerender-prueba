import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondosBolsaMexicanaComponent } from './bolsa-mexicana.component';

describe('FondosBolsaMexicanaComponent', () => {
  let component: FondosBolsaMexicanaComponent;
  let fixture: ComponentFixture<FondosBolsaMexicanaComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ FondosBolsaMexicanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FondosBolsaMexicanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
