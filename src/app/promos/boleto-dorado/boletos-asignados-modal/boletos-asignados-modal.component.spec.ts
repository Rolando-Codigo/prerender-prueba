import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletosAsignadosModalComponent } from './boletos-asignados-modal.component';

describe('BoletosAsignadosModalComponent', () => {
  let component: BoletosAsignadosModalComponent;
  let fixture: ComponentFixture<BoletosAsignadosModalComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ BoletosAsignadosModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoletosAsignadosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
