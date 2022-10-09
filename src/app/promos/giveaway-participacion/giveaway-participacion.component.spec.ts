import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveawayParticipacionComponent } from './giveaway-participacion.component';


describe('GiveawayParticipacionComponent', () => {
  let component: GiveawayParticipacionComponent;
  let fixture: ComponentFixture<GiveawayParticipacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveawayParticipacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveawayParticipacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});





