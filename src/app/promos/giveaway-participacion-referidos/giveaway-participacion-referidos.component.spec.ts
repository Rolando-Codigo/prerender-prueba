import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveawayParticipacionReferidosComponent } from './giveaway-participacion-referidos.component';

describe('GiveawayParticipacionReferidosComponent', () => {
  let component: GiveawayParticipacionReferidosComponent;
  let fixture: ComponentFixture<GiveawayParticipacionReferidosComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ GiveawayParticipacionReferidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveawayParticipacionReferidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
