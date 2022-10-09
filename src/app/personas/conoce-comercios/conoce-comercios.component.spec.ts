import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConoceComerciosComponent } from './conoce-comercios.component';

describe('ConoceComerciosComponent', () => {
  let component: ConoceComerciosComponent;
  let fixture: ComponentFixture<ConoceComerciosComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ ConoceComerciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConoceComerciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
