import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomicilioAfiliacionComponent } from './domicilio-afiliacion.component';

describe('DomicilioAfiliacionComponent', () => {
  let component: DomicilioAfiliacionComponent;
  let fixture: ComponentFixture<DomicilioAfiliacionComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ DomicilioAfiliacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomicilioAfiliacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
