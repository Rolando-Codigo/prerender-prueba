import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveawayParticipacionBuenFinComponent } from './giveaway-participacion-buen-fin.component';

describe('GiveawayParticipacionBuenFinComponent', () => {
  let component: GiveawayParticipacionBuenFinComponent;
  let fixture: ComponentFixture<GiveawayParticipacionBuenFinComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ GiveawayParticipacionBuenFinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveawayParticipacionBuenFinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
