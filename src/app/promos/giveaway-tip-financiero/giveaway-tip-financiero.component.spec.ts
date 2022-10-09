import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveawayTipFinancieroComponent } from './giveaway-tip-financiero.component';

describe('GiveawayTipFinancieroComponent', () => {
  let component: GiveawayTipFinancieroComponent;
  let fixture: ComponentFixture<GiveawayTipFinancieroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveawayTipFinancieroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveawayTipFinancieroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
