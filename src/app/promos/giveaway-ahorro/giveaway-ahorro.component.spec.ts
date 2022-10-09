import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveawayAhorroComponent } from './giveaway-ahorro.component';

describe('GiveawayAhorroComponent', () => {
  let component: GiveawayAhorroComponent;
  let fixture: ComponentFixture<GiveawayAhorroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveawayAhorroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveawayAhorroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
