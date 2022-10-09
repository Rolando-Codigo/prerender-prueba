import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProteccionHeyComponent } from './proteccion-hey.component';

describe('ProteccionHeyComponent', () => {
  let component: ProteccionHeyComponent;
  let fixture: ComponentFixture<ProteccionHeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProteccionHeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProteccionHeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
