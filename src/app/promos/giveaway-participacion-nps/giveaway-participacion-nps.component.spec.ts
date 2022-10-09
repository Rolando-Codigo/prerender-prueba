import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveawayParticipacionNpsComponent } from './giveaway-participacion-nps.component';

describe('GiveawayParticipacionNpsComponent', () => {
  let component: GiveawayParticipacionNpsComponent;
  let fixture: ComponentFixture<GiveawayParticipacionNpsComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ GiveawayParticipacionNpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveawayParticipacionNpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
