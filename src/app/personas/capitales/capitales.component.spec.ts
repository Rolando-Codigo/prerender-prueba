import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalesComponent } from './capitales.component';

describe('CapitalesComponent', () => {
  let component: CapitalesComponent;
  let fixture: ComponentFixture<CapitalesComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ CapitalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
