import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveawayParticipacionReferidosHeyComponent } from './giveaway-participacion-referidos-hey.component';

describe('GiveawayParticipacionReferidosHeyComponent', () => {
  let component: GiveawayParticipacionReferidosHeyComponent;
  let fixture: ComponentFixture<GiveawayParticipacionReferidosHeyComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ GiveawayParticipacionReferidosHeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveawayParticipacionReferidosHeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
