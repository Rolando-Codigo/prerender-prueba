import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveawayParticipacionNominaComponent } from './giveaway-participacion-nomina.component';


describe('GiveawayParticipacionNominaComponent', () => {
  let component: GiveawayParticipacionNominaComponent;
  let fixture: ComponentFixture<GiveawayParticipacionNominaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveawayParticipacionNominaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveawayParticipacionNominaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});





