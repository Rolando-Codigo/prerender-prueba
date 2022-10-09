import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveawayEstudiantesComponent } from './giveaway-estudiantes.component';

describe('GiveawayEstudiantesComponent', () => {
  let component: GiveawayEstudiantesComponent;
  let fixture: ComponentFixture<GiveawayEstudiantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveawayEstudiantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveawayEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
