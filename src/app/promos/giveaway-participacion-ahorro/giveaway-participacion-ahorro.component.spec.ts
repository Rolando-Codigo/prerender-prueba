import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveawayParticipacionAhorroComponent } from './giveaway-participacion-ahorro.component';


describe('GiveawayParticipacionAhorroComponent', () => {
  let component: GiveawayParticipacionAhorroComponent;
  let fixture: ComponentFixture<GiveawayParticipacionAhorroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveawayParticipacionAhorroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveawayParticipacionAhorroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});





