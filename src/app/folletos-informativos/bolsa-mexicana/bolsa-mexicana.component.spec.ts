import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoBolsaMexicanaComponent } from './bolsa-mexicana.component';

describe('FondoBolsaMexicanaComponent', () => {
  let component: FondoBolsaMexicanaComponent;
  let fixture: ComponentFixture<FondoBolsaMexicanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FondoBolsaMexicanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FondoBolsaMexicanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
