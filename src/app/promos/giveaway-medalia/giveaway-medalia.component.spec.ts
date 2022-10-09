import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveawayMedaliaComponent } from './giveaway-medalia.component';

describe('GiveawayMedaliaComponent', () => {
  let component: GiveawayMedaliaComponent;
  let fixture: ComponentFixture<GiveawayMedaliaComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ GiveawayMedaliaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveawayMedaliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
