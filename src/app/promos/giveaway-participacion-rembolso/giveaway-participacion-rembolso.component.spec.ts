import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveawayParticipacionRembolsoComponent } from './giveaway-participacion-rembolso.component';

describe('GiveawayParticipacionRembolsoComponent', () => {
  let component: GiveawayParticipacionRembolsoComponent;
  let fixture: ComponentFixture<GiveawayParticipacionRembolsoComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ GiveawayParticipacionRembolsoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveawayParticipacionRembolsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
